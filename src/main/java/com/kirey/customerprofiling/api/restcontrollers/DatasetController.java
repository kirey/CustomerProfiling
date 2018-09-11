package com.kirey.customerprofiling.api.restcontrollers;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.api.dto.VariableDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.common.constants.ColumnType;
import com.kirey.customerprofiling.common.constants.DataType;
import com.kirey.customerprofiling.common.util.Utilities;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.dao.VariablesDao;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.Variables;
import com.kirey.customerprofiling.data.service.CSVParser;
import com.kirey.customerprofiling.data.service.DatasetService;
import com.univocity.parsers.common.processor.RowListProcessor;


/**
 * 
 * @author paunovicm
 *
 */

@RestController
@RequestMapping("/rest/dataset")
public class DatasetController {
	
	@Autowired
	private DatasetService datasetService;
	
	@Autowired
	private DatasetsDao datasetsDao;
	
	@Autowired
	private VariablesDao variablesDao;
	
	@Autowired
	private ProjectsDao projectDao;
	
	/**
	 * Method for getting list of {@link Variables}  used for pre processing data
	 * @return ResponseEntity containing the list of {@link Variables} along with HTTP status
	 * @throws FileNotFoundException
	 */
	//TEMPORARY CONTROLLER
	@RequestMapping(value = "/preprocessing/temp", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getPreProcessingInfo() throws FileNotFoundException {
		File file = new File("C:\\Temp\\testCSV.csv"); //Or upload from application (@RequestPart MultipartFile csvFile)
		InputStream is = new FileInputStream(file);
		List<Variables> listVariables = datasetService.getVariablesFromCSV(is);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listVariables, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting list of {@link Variables} for given {@link Datasets} used for pre processing data
	 * @param datasetId - of {@link Datasets}
	 * @return ResponseEntity containing the list of {@link Variables} along with HTTP status
	 */
	@RequestMapping(value = "/preprocessing", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getPreProcessingInfo(@RequestParam Integer datasetId) {
		Datasets dataset = datasetsDao.findById(datasetId);
		List<Variables> listVariables = variablesDao.findByDataset(dataset);
		for (Variables variables : listVariables) {
			variables.setDataset(null);
		}
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listVariables, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting all possible types of data
	 * @return ResponseEntity containing the all values of {@link DataType} along with HTTP status
	 */
	@RequestMapping(value = "/dataTypes", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getDataTypes() {
		Object[] possibleValues = DataType.values();
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(possibleValues, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting all possible types of variable
	 * @return ResponseEntity containing the all values of {@link ColumnType} along with HTTP status
	 */
	@RequestMapping(value = "/columnTypes", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getVariableTypes() {
		Object[] possibleValues = ColumnType.values();
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(possibleValues, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting types of operation for given data type
	 * @param dataType 
	 * @return ResponseEntity containing the types of operation along with HTTP status
	 */
	@RequestMapping(value = "/operationTypes", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getOperationTypes(@RequestParam DataType dataType) {
		List<String> possibleValues = new ArrayList<>();
		
		if(dataType.equals(DataType.NUMERIC)) {
			possibleValues.add(AppConstants.OPERATION_TYPE_SCALING_OPERATION);
			possibleValues.add(AppConstants.OPERATION_TYPE_BINNING_OPERATION);
			possibleValues.add(AppConstants.OPERATION_TYPE_LIVE_AS_IT_IS);
			possibleValues.add(AppConstants.OPERATION_TYPE_UNFOLDING_DISTINCT);
		}else if(dataType.equals(DataType.TEXT)) {
			possibleValues.add(AppConstants.OPERATION_TYPE_UNFOLDING_DISTINCT);
			possibleValues.add(AppConstants.OPERATION_TYPE_LIVE_AS_IT_IS);
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(possibleValues, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	/**
	 * Method for displaying transformed (derived) CSV file
	 * @param variables List of {@link Variables}
	 * @param datasetId - id of selected {@link Datasets}
	 * @return ResponseEntity containing the transformed CSV file along with HTTP status
	 * @throws FileNotFoundException
	 */
	@RequestMapping(value = "/preprocessing/view", method = RequestMethod.POST)
	public ResponseEntity<RestResponseDto> getPreprocessingView(@RequestBody List<Variables> variables, @RequestParam Integer datasetId) throws FileNotFoundException{//
		Datasets dataset = datasetsDao.findById(datasetId);
		File originalFile = new File(dataset.getFilename());//new File("C:\\Temp\\testCSV.csv"); //dataset.getFilename();
		InputStream is = new FileInputStream(originalFile);
		String csv = datasetService.createDerivedFromOriginal(is, variables, false, dataset, null);

		return new ResponseEntity<RestResponseDto>(new RestResponseDto(csv, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for saving transformed CSV file, derived Dataset, derived Variables and derived variable values
	 * @param originalVariables List of {@link Variables}
	 * @param datasetId - id of selected {@link Datasets}
	 * @return ResponseEntity containing the status message along with HTTP status
	 * @throws FileNotFoundException
	 */
	@RequestMapping(value = "/preprocessing/save", method = RequestMethod.POST)
	public ResponseEntity<RestResponseDto> saveTransformedCSV(@RequestBody List<Variables> originalVariables, @RequestParam Integer datasetId, @RequestParam Integer projectId) throws FileNotFoundException{
		boolean belong = projectDao.belongToLoggedUser(projectId);
		if(!belong) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "You are not authorized to view details for this project"), HttpStatus.BAD_REQUEST);
		}
		Datasets derivedDatast = datasetsDao.getDerivedFromProject(projectId);
		if(derivedDatast != null && derivedDatast.getFlagFinal() != null && derivedDatast.getFlagFinal()) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "Derived dataset already exist for current project"), HttpStatus.BAD_REQUEST);
		}
		Datasets originalDataset = datasetsDao.findById(datasetId);
		Projects project = projectDao.findById(projectId);
		//update original variables
		for (Variables variable : originalVariables) {
			variable.setDataset(originalDataset);
			variablesDao.merge(variable);
		}
		
		//save derived dataset
		Datasets derivedDataset = datasetService.saveDerivedDatasetFromOriginal(originalDataset, project);
		
		File originalFile = new File(originalDataset.getFilename()); //"C:\\Temp\\testCSV.csv"
		InputStream is = new FileInputStream(originalFile);
		String derivedCSV = datasetService.createDerivedFromOriginal(is, originalVariables, true, originalDataset, project);
		
		InputStream derivedIs = new ByteArrayInputStream(derivedCSV.getBytes());
		datasetService.saveDerivedVariableAndValues(derivedIs, derivedDataset);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Derived dataset successfully saved with derived variables and values"), HttpStatus.OK);
	}
	
	/**
	 * Creates new dataset from uploaded CSV file
	 * @param csvFile
	 * @param dataset
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/addNewDataset", method = RequestMethod.POST,consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> uploadCsvDataset(@RequestPart(name="csvFile") MultipartFile csvFile, @RequestPart(name="dataset") Datasets dataset) throws IOException {
		
		String filePath = datasetService.uploadCSVFile(csvFile);
		File file = new File(filePath); 
		InputStream is = new FileInputStream(file);
		
		
		Datasets newDataset = new Datasets();
		newDataset.setFilename(filePath);
		newDataset.setName(dataset.getName());
		newDataset.setDescription(dataset.getDescription());
		double sizeInBytes = csvFile.getSize();
		newDataset.setDatasetSize(Utilities.round(sizeInBytes/1024, 4));
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(is);
		List<String[]> rows = processor.getRows();
		newDataset.setNoOfRows(rows.size());
	    datasetsDao.attachDirty(newDataset);
	    
	    InputStream is1 = new FileInputStream(file);
		List<Variables> listVariables = datasetService.getVariablesFromCSV(is1);
		InputStream is2 = new FileInputStream(file);
		listVariables = datasetService.setVariableStatistics(listVariables, is2);
		for (Variables variable : listVariables) {
			variable.setDataset(newDataset);
			variablesDao.attachDirty(variable);
		}
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Dataset successfully created"), HttpStatus.OK);
	}
	
	/**
	 * Retrieve all original datasets
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAllDatasets(){
				
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(datasetsDao.findAllOriginal(), HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Get datastet details
	 * @param datasetId
	 * @return
	 * @throws FileNotFoundException
	 */
	@RequestMapping(value = "/{datasetId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> datasetDetails(@PathVariable Integer datasetId) throws FileNotFoundException{
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(datasetService.getDatasetDetails(datasetId), HttpStatus.OK.value()), HttpStatus.OK);
	}
		
	/**
	 * Delete selected dataset
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> deleteDataset(@PathVariable Integer id){
		
		Datasets dataset = datasetsDao.findById(id);
		List<Datasets> derivedDatasets = datasetsDao.findDerivedByOriginal(dataset);
		
		if( derivedDatasets != null && !derivedDatasets.isEmpty() ) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "Dataset can't be deleted!"), HttpStatus.BAD_REQUEST);
		}else {
			datasetsDao.delete(dataset);	
		}
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Dataset successfully deleted!"), HttpStatus.OK);
	}
	
	/**
	 * Check if project is linked to some derived dataset 
	 * if true link button on ONE PROJECT PAGE - Overview is disabled, othervise is enabled
	 * @param datasetId
	 * @return
	 */
	@RequestMapping(value = "/linkDataset", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> findDatasetBynName(@RequestParam Integer projectId){
		
		Map<Object, Object> responseMap = new HashMap<>();
		Datasets originalDataset = datasetsDao.findOriginalByProject(projectId);
		if(originalDataset != null) {
			responseMap.put(true, originalDataset.getId());
		}else {
			responseMap.put(false, null);
		}
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(responseMap, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for creating/updating empty derived dataset with relation with chosen original dataset and chosen project
	 * @param projectId
	 * @param datasetId - of original dataset
	 * @return ResponseEntity containing the status message along with HTTP status
	 */
	@RequestMapping(value = "/link", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> linkDatasetToProject(@RequestParam Integer projectId, @RequestParam Integer datasetId){
		Datasets dataset = datasetsDao.findById(datasetId);
		Projects project = projectDao.findById(projectId);
		Datasets derivedDataset = datasetsDao.getDerivedFromProject(projectId);
		if(derivedDataset == null) {
			derivedDataset = new Datasets();
		}else if(derivedDataset.getFlagFinal()) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "Dataset can't be changed"), HttpStatus.BAD_REQUEST);
		}
		derivedDataset.setOriginalDataset(dataset);
		derivedDataset.setName(dataset.getName() + AppConstants.DERIVED + projectId);
		derivedDataset.setFlagFinal(false);
		derivedDataset.setProject(project);
		datasetsDao.attachDirty(derivedDataset);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Dataset successfully linked"), HttpStatus.OK);
	}
	
	/**
	 * Method for getting statistics for given dataset
	 * @param datasetId - of {@link Datasets}
	 * @return ResponseEntity containing the list of variable statistics along with HTTP status
	 */
	@RequestMapping(value = "/variableDetails", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> variableDetails(@RequestParam Integer datasetId){
		
		Datasets dataset = datasetsDao.findById(datasetId);
		List<VariableDto> variableDetails = datasetService.getVariableStatisticsByDataset(dataset);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(variableDetails, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
}
