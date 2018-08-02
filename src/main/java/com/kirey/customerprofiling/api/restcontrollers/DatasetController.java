package com.kirey.customerprofiling.api.restcontrollers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
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
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.common.constants.ColumnType;
import com.kirey.customerprofiling.common.constants.DataType;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.dao.VariablesDao;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.Variables;
import com.kirey.customerprofiling.data.service.DatasetService;

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
	@RequestMapping(value = "/preprocessing", method = RequestMethod.GET)
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
	@RequestMapping(value = "/preprocessing/dataset", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getPreProcessingInfo(@RequestParam Integer datasetId) {
		Datasets dataset = datasetsDao.findById(datasetId);
		List<Variables> listVariables = variablesDao.findByDataset(dataset);
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
		}else if(dataType.equals(DataType.TEXT)) {
			possibleValues.add(AppConstants.OPERATION_TYPE_UNFOLDING_DISTINCT);
			possibleValues.add(AppConstants.OPERATION_TYPE_LIVE_AS_IT_IS);
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(possibleValues, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	
	@RequestMapping(value = "/preprocessing/view", method = RequestMethod.POST)
	public ResponseEntity<RestResponseDto> getPreprocessingView(@RequestBody List<Variables> variables) throws FileNotFoundException{//
		
		File originalFile = new File("C:\\Temp\\testCSV.csv"); //Or get from somewhere else
		InputStream is = new FileInputStream(originalFile);
		String csv = datasetService.createDerivedFromOriginal(is, variables, false);

		return new ResponseEntity<RestResponseDto>(new RestResponseDto(csv, HttpStatus.OK.value()), HttpStatus.OK);
	}
	

	@RequestMapping(value = "/addNewDataset", method = RequestMethod.POST,consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> uploadCsvDataset(@RequestPart(name="csvFile") MultipartFile csvFile, @RequestPart(name="dataset") Datasets dataset) throws IllegalStateException, IOException{
		
		String filePath = datasetService.uploadCSVFile(csvFile);
		Datasets newDataset = new Datasets();
		newDataset.setFilename(filePath);
		newDataset.setName(dataset.getName());
		newDataset.setDescription(dataset.getDescription());
	    datasetsDao.attachDirty(newDataset);
	    
	    File file = new File(filePath); 
		InputStream is = new FileInputStream(file);
		List<Variables> listVariables = datasetService.getVariablesFromCSV(is);
		for (Variables variable : listVariables) {
			variable.setDataset(newDataset);
			variablesDao.attachDirty(variable);
		}
	    		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Dataset successfully created", HttpStatus.OK.value()), HttpStatus.OK);
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
	
	/*@RequestMapping(value = "/datasets/{datasetName}", method = RequestMethod.POST)
	public ResponseEntity<RestResponseDto> findDatasetBynName(@PathVariable String datasetName){
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(datasetsDao.findByName(datasetName), HttpStatus.OK.value()), HttpStatus.OK);
	}*/
	
	/**
	 * Delete selected dataset
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> deleteDataset(@PathVariable Integer id){
		
		Datasets dataset = datasetsDao.findById(id);
		
		if(dataset.getProject() != null) {
			Projects project = projectDao.findById(dataset.getProject().getId());				
			project.setDatasets(null);
			projectDao.attachDirty(project);
		}
		
		datasetsDao.delete(dataset);
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Dataset successfully deleted!", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Link selected project with selected dataset
	 * @param projectId
	 * @param datasetId
	 * @return
	 */
	@RequestMapping(value = "/linkDataset", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> findDatasetBynName(@RequestParam Integer projectId, @RequestParam Integer datasetId){
		//Proveriti s Vladom
		/*Projects project = projectDao.findById(projectId);
		Datasets dataset = datasetsDao.findById(datasetId);
		project.setDatasets(dataset);
		projectDao.attachDirty(project);*/
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("OK", HttpStatus.OK.value()), HttpStatus.OK);
	}
}
