package com.kirey.customerprofiling.data.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

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
import com.univocity.parsers.csv.CsvWriter;
import com.univocity.parsers.csv.CsvWriterSettings;

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

	
	/**
	 * Method for transforming variables from original csv file and original dataset and saves transformed csv file
	 * to local disk if flag save is true
	 * @param csvFile - original csvFile
	 * @param variables - {@link List} of {@link Variables}
	 * @param save - true/false flag
	 * @return String transformed csv file
	 */
	public String createDerivedFromOriginal(InputStream csvFile, List<Variables> variables, boolean save) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(csvFile);
		List<String> derivedHeaders = new ArrayList<>();
		
		List<List<String[]>> listRows = new ArrayList<>();
		for (Variables variable : variables) {
			if(variable.getTypeOfData().equals(DataType.TEXT)) {
				if(variable.isDistinct()) {
					List<String> distinctHeaders = this.findDistinctFromCSV(variable, processor);
					List<String[]> values = this.getValuesDistinctTransformed(variable, processor, distinctHeaders);
					listRows.add(values);
//					distinctValues = this.getValuesDistinctTransformed(variable, processor, distinctHeaders);
					//add to headers
					derivedHeaders.addAll(distinctHeaders);
				}else if(variable.isLeaveAsItIs()) {
					List<String> allValues = this.findAllValuesFromCSV(variable, processor);
					//add to headers
					derivedHeaders.addAll(allValues);
				}
			} else if(variable.getTypeOfData().equals(DataType.NUMERIC)) {
				if(variable.getBins() != null) {
					//binning operation
					HashMap<String, Object> binningMap = this.binningOperation(variable, processor);
					derivedHeaders.addAll((Collection<? extends String>) binningMap.get(AppConstants.HEADERS_KEY));
					listRows.add((List<String[]>) binningMap.get(AppConstants.ROWS_KEY));
				} else {
					//scaling operation
					List<Double> values = this.scalingOperation(variable, processor);
					
					//transform to string
					List<String[]> stringValues = new ArrayList<>();
					for(int i = 0; i < values.size(); i++) {
						String[] s = new String[1];
						s[0] = String.valueOf(values.get(i));
						stringValues.add(s);
					}
					//add to headers
					derivedHeaders.add(variable.getVariableName());
					listRows.add(stringValues);
					
				}
			}
			
		}
		//get all headers
		String[] headers = new String[derivedHeaders.size()];
		headers = derivedHeaders.toArray(headers);
		
		//build rows
		int sizes = 0;
		for(List<String[]> list : listRows) {
			String[] first = list.get(0);
			sizes = sizes + first.length;
		}

		List<String[]> listNzma = new ArrayList<>();
		
		int global = 0;
		for(int s = 0; s < processor.getRows().size(); s++) {
			String[] nzm = new String[sizes];
			int i = 0;
			int k = 0;
			for (List<String[]> list : listRows) {
				for (int j = 0; j < list.get(k).length; j++) {
					nzm[i] = list.get(global)[j];
					i++;
				}
				k++;

			}
			listNzma.add(nzm);
			global++;
		}
		
		//write csv
		String csv = writeSimpleCsv(headers, listNzma, save);
		return csv;
		
	}
	
	/**
	 * Method used for getting headers and values for given variable by performing binning operation on given CSV file
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @return {@link HashMap} containing list of headers as "headers" and list of values as "rows" key
	 */
	private HashMap<String, Object> binningOperation(Variables variable, RowListProcessor processor) {
		HashMap<String, Object> returnMap = new HashMap<>();
		List<String[]> rows = new ArrayList<>();
		List<Double> listValues = this.getNumericValuesFromCSVByVariable(variable, processor);
		for (Double value : listValues) {
			String[] row = new String[variable.getBins()];
			for(int i = 0; i < variable.getBins(); i++) {
				row[i] = this.performBinningOperation(value, variable.getBins(), i);
			}
			rows.add(row);
		}
		
		//get headers
		List<String> headers = new ArrayList<>();
		for(int i = 0; i < variable.getBins(); i++) {
			String header = variable.getVariableName() + i;
			headers.add(header);
		}
		
		returnMap.put(AppConstants.HEADERS_KEY, headers);
		returnMap.put(AppConstants.ROWS_KEY, rows);
		
		return returnMap;
	}

	/**
	 * Method for finding range in which value belongs. 
	 * <p>Range is defined from
	 * <p> <code>bins * increment</code>
	 * <p> to 
	 * <p><code>bins * (increment+1)</code>
	 * @param x - the value for which the range should be found
	 * @param bins - for defining range
	 * @param increment - value can be from 0 to bins
	 * @return "1" if value x belongs to given range or "0" if not.
	 */
	private String performBinningOperation(double x, Integer bins, int increment) {
		int min = bins* increment;
		int max = bins*(increment+1);
		
		if(x >= min && x < max) {
			return "1";
		}else {
			return "0";
		}
	}

	/**
	 * Method for calculating values from CSV file for given variable by unfolding distinct headers
	 * @param variable - {@link Variables} object
	 * @param processor - {@link RowListProcessor} parsed CSV file
	 * @param distinctHeaders - {@link List} of distinct headers form CSV file
	 * @return List<String[]> fulfilled with "1" and "0" depends on position in CSV file
	 */
	private List<String[]> getValuesDistinctTransformed(Variables variable, RowListProcessor processor, List<String> distinctHeaders) {
		List<String[]> matrixList = new ArrayList<>();
		List<String[]> listRows = processor.getRows();
		//matrix value is unused but calculated
		String[][] matrix = new String[listRows.size()][distinctHeaders.size()];
		int k = 0;
		for (String[] rows : listRows) {
			String[] derivedRows = new String[distinctHeaders.size()];
			for(int i = 0; i < rows.length; i++) {//rows
				
				for(int j = 0; j < distinctHeaders.size(); j++) {//columns
					if(i == variable.getColumnNumber()) {
						if(rows[i].equals(distinctHeaders.get(j))) {
							derivedRows[j] = "1 ";
							matrix[k][j] = "1 ";
						}else {
							derivedRows[j] = "0 ";
							matrix[k][j] = "0 ";
						}
					}
				}
				
			}
			k++;
			matrixList.add(derivedRows);
		}
		
		return matrixList;
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
	
	
	/**
	 * Method for generating csv file from given headers and rows. If flag save is true then csv file will be saved to local disk. 
	 * @param headers - headers for csv file
	 * @param rows - rows for csv file
	 * @param save - true/false
	 * @return String csvFile
	 */
	public String writeSimpleCsv(String[] headers, List<String[]> rows, boolean save) {

		// Writing to an in-memory byte array. This will be printed out to the standard output so you can easily see the result.
		ByteArrayOutputStream csvResult = new ByteArrayOutputStream();

		// CsvWriter (and all other file writers) work with an instance of java.io.Writer
		Writer outputWriter = new OutputStreamWriter(csvResult);

		// All you need is to create an instance of CsvWriter with the default CsvWriterSettings.
		// By default, only values that contain a field separator are enclosed within quotes.
		// If quotes are part of the value, they are escaped automatically as well. Empty rows are discarded automatically.
		CsvWriter writer = new CsvWriter(outputWriter, new CsvWriterSettings());

		// Write the record headers of this file
		writer.writeHeaders(headers);

		// Here we just tell the writer to write everything and close the given output Writer instance.
		writer.writeStringRowsAndClose(rows);

		System.out.println(csvResult.toString());

		try {

			String csv = new String(csvResult.toByteArray(), "UTF-8");

			if (save) {
				// Write from byte array to CSV file somewhere on local disk.
				OutputStream outputStream = new FileOutputStream("C:\\Temp\\testCSV1.csv");
				csvResult.writeTo(outputStream);
			}
			return csv;

		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}
}
