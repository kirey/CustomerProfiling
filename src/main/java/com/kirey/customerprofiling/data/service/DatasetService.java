package com.kirey.customerprofiling.data.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kirey.customerprofiling.api.dto.DatasetDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.common.constants.DataType;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.Variables;
import com.univocity.parsers.common.processor.RowListProcessor;

/**
 * 
 * @author paunovicm
 *
 */

@Service
public class DatasetService {
	
	@Autowired
	private DatasetsDao datasetsDao;

	/**
	 * Method for getting List of {@link Variables} from csv file
	 * @param csvFile - {@link InputStream} of csv file
	 * @return {@link List}<{@link Variables}>
	 */
	public List<Variables> getVariablesFromCSV(InputStream csvFile){
		CSVParser parser = new CSVParser();
//		List<Variables> listVariables = parser.parseFile(Variables.class, csvFile);
		List<Variables> listVariables = new ArrayList<>();
		RowListProcessor processor = parser.parceFile(csvFile);
		
		String[] headers = processor.getHeaders();
		for(int i = 0; i < headers.length; i++) {
			if(!processor.getRows().isEmpty()) {
				Variables variable = new Variables();
				variable.setVariableName(headers[i]);
				String[] firstRow = processor.getRows().get(0);
				String firstValue = firstRow[i];
				
				if(NumberUtils.isCreatable(firstValue)) {
					variable.setTypeOfData(DataType.NUMERIC);
				}else {
					variable.setTypeOfData(DataType.TEXT);
				}
				variable.setColumnNumber(i);
				listVariables.add(variable);
			}
			
		}
		
		return listVariables;
	}
	
	public int getNumberOfColumnsCSV(InputStream csvFile) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(csvFile);
		String[] headers = processor.getHeaders();
		
		return headers.length;
	}

	public void createDerivedFromOriginal(InputStream csvFile, List<Variables> variables) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(csvFile);
		List<String> derivedHeaders = new ArrayList<>();
		
		
		
		for (Variables variable : variables) {
			if(variable.getTypeOfData().equals(DataType.TEXT)) {
				if(variable.isDistinct()) {
					List<String> distinctValues = this.findDistinctFromCSV(variable, processor);
					List<Integer> values = this.getValuesDistinctTransformed(variable, processor);
					derivedHeaders.addAll(distinctValues);
				}else if(variable.isLeaveAsItIs()) {
					List<String> allValues = this.findAllValuesFromCSV(variable, processor);
					derivedHeaders.addAll(allValues);
				}
			} else if(variable.getTypeOfData().equals(DataType.NUMERIC)) {
				if(variable.getBins() != null) {
					//binning operation
					
				} else {
					//scaling operation
					List<Double> values = this.scalingOperation(variable, processor);
					derivedHeaders.add(variable.getVariableName());
				}
			}
			
		}
		
		/*//////////////////////////
		String matrix[][] = new String[5][derivedHeaders.size()];

		for (int i = 0; i < 5; i++) {

			for (int j = 0; j < derivedHeaders.size(); j++) {
				if(i==0) {
					matrix[i][j] = derivedHeaders.get(j);	
				}else {
					matrix[i][j] = String.valueOf(j);
				}
				
			}
		}
		
		for (int i = 0; i < matrix.length; i++) {
		    for (int j = 0; j < matrix[i].length; j++) {
		        System.out.print(matrix[i][j] + " ");
		    }
		    System.out.println();
		}
		
		String matrix2[][] = new String[5][1];
		for(int i = 0; i < 5; i++) {
			for(int j = 0; j < 1; j++) {
				if(i == 0) {
					matrix2[i][j] = "novi header";
				}else {
					matrix2[i][j] = String.valueOf(j);	
				}
				
			}
		}
		
		System.out.println("--------------------------------------------");
		for (int i = 0; i < matrix2.length; i++) {
		    for (int j = 0; j < matrix2[i].length; j++) {
		        System.out.print(matrix2[i][j] + " ");
		    }
		    System.out.println();
		}
		
		
		
//		String joined[][] = (String [][])ArrayUtils.addAll(matrix, matrix2);

		
		String joined[][] = new String[matrix.length+matrix2.length][];
		System.arraycopy(matrix, 0, joined, 0, matrix.length);
		System.arraycopy(matrix2, 0, joined, matrix.length, matrix2.length);
		
		System.out.println("--------------------------------------------");
		for (int i = 0; i < joined.length; i++) {
		    for (int j = 0; j < joined[i].length; j++) {
		        System.out.print(joined[i][j] + " ");
		    }
		    System.out.println();
		}		
		

		*//////////////////////////
		
	}
	
	private List<Integer> getValuesDistinctTransformed(Variables variable, RowListProcessor processor) {
		List<String[]> listRows = processor.getRows();
		for (String[] rows : listRows) {
			for(int i = 0; i < rows.length; i++) {
				if(i == variable.getColumnNumber()) {
					//TODO find if row[i] equals to header -> write 0 or 1
				}
			}
		}
		return null;
	}

	/**
	 * Method used for performing scaling operation
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @return {@link List} of transformed values
	 */
	private List<Double> scalingOperation(Variables variable, RowListProcessor processor) {
		List<Double> listValues = this.getNumericValuesFromCSVByVariable(variable, processor);
		Double in_min = listValues.stream().mapToDouble(v -> v).min().getAsDouble();
		Double in_max = listValues.stream().mapToDouble(v -> v).max().getAsDouble();
		List<Double> transformedValues = new ArrayList<>();
		for (Double value : listValues) {
			Double transformedValue = this.mapRangeToAnother(value, in_min, in_max, variable.getScaleMin(), variable.getScaleMax());
			transformedValues.add(transformedValue);
		}
		
		return transformedValues;
	}

	/**
	 * Method for transforming value from one range to another
	 * @param x - value that need to be transformed
	 * @param in_min - min value of actual range
	 * @param in_max - max value of actual range
	 * @param out_min - min value of range in which value need to be transformed
	 * @param out_max - max value of range in which value need to be transformed
	 * @return transformed value
	 */
	private Double mapRangeToAnother(Double x, Double in_min, Double in_max, double out_min, double out_max) {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

	/**
	 * Method for getting List of numeric values from CSV file by given variable
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @return {@link List} of numeric values
	 */
	private List<Double> getNumericValuesFromCSVByVariable(Variables variable, RowListProcessor processor) {
		List<String[]> listRows = processor.getRows();
		List<Double> listValues = new ArrayList<>();
		for (String[] rows : listRows) {
			for(int i = 0; i < rows.length; i++) {
				if(i == variable.getColumnNumber()) {
					listValues.add(Double.parseDouble(rows[i]));
				}
			}
		}
		return listValues;
	}

	/**
	 * Method for getting values from CSV file for given variable
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @return {@link List} of distinct values
	 */
	private List<String> findAllValuesFromCSV(Variables variable, RowListProcessor processor) {
		List<String[]> listRows = processor.getRows();
		
		List<String> listAllValues = new ArrayList<>();
		
		for (String[] rows : listRows) {
			for(int i = 0; i < rows.length; i++) {
				if(i == variable.getColumnNumber()) {
					listAllValues.add(rows[i]);
				}
			}
		}
		return listAllValues;
	}

	/**
	 * Method for getting values from CSV file for given variable
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @return {@link List} values
	 */
	private List<String> findDistinctFromCSV(Variables variable, RowListProcessor processor) {
		List<String[]> listRows = processor.getRows();
		
		List<String> listAllValues = new ArrayList<>();
		
		for (String[] rows : listRows) {
			for(int i = 0; i < rows.length; i++) {
				if(i == variable.getColumnNumber()) {
					listAllValues.add(rows[i]);
				}
			}
		}
		
		List<String> distinctList = listAllValues.stream().distinct().collect(Collectors.toList());
		return distinctList;
	}
	
	public String uploadCSVFile(MultipartFile csvFile) throws IllegalStateException, IOException {
		
		String uploadDir = "C:\\Temp\\";
		if(! new File(uploadDir).exists())
        {
            new File(uploadDir).mkdir();
        }

		String orgName = csvFile.getOriginalFilename();
        String filePath = uploadDir + orgName;
        
        File dest = new File(filePath);
        csvFile.transferTo(dest);
		
        return filePath;
	}
	
	public DatasetDto getDatasetDetails(Integer datasetId) throws FileNotFoundException {
		
		Datasets dataset = datasetsDao.findById(datasetId);
		
		DatasetDto datasetDto = new DatasetDto();
		datasetDto.setDatasetDesc(dataset.getDescription());
		datasetDto.setDatasetName(dataset.getName());
		
		File file = new File(dataset.getFilename());
		InputStream is = new FileInputStream(file);
		List<Variables> listVariables = getVariablesFromCSV(is);
		
		is = new FileInputStream(file);
		datasetDto.setNumberOfVariables(listVariables.size());
		datasetDto.setNumberOfColumns(getNumberOfColumnsCSV(is));
		datasetDto.setDatasetSize(150);  //TODO prepraviti posle kad se razjasni sta je to
		datasetDto.setProject(dataset.getProject());
		
		return datasetDto;
	}
}
