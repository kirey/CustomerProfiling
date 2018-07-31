package com.kirey.customerprofiling.api.restcontrollers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.common.constants.ColumnType;
import com.kirey.customerprofiling.common.constants.DataType;
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
	
	/**
	 * Method for getting list of {@link Variables}  used for pre processing data
	 * @return ResponseEntity containing the list of {@link Variables} along with HTTP status
	 * @throws FileNotFoundException
	 */
	@RequestMapping(value = "/preprocessing", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getPreProcessingInfo() throws FileNotFoundException {
		File file = new File("C:\\Temp\\testCSV.csv"); //Or upload from application (@RequestPart MultipartFile csvFile)
		InputStream is = new FileInputStream(file);
		List<Variables> listVariables = datasetService.getVariablesFromCSV(is);
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
	
	@RequestMapping(value = "/preprocessing/view", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getPreprocessingView(@RequestBody List<Variables> variables) throws FileNotFoundException{//
		
		
		File originalFile = new File("C:\\Temp\\testCSV.csv"); //Or get from somewhere else
		InputStream is = new FileInputStream(originalFile);
		
		datasetService.createDerivedFromOriginal(is, variables);
		
		
//		String[] headers = {"nesto1", "nesto2"}; 
//		List<String[]> list = new ArrayList<>();
//		for(int i = 0; i < 5; i++) {
//			String[] values = {"value1", "value2"};
//			list.add(values);
//		}
//		
//		String[][] matrix = new String[2][5];
//		for(int i = 0; i < headers.length; i ++) {
//			for (int j = 0; j < list.size(); j++) {
//				matrix[i] = headers;
//				matrix[j] = list.get(j);
//			}
//		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	

}
