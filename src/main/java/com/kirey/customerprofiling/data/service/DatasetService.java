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
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.commons.math3.stat.descriptive.moment.Variance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kirey.customerprofiling.api.dto.DatasetDto;
import com.kirey.customerprofiling.api.dto.VariableDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.common.constants.DataType;
import com.kirey.customerprofiling.common.util.Utilities;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.dao.DerivedVariableValuesDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.dao.VariablesDao;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.DerivedVariableValue;
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
	
	@Autowired
	private DerivedVariableValuesDao derivedVariableValuesDao;
	
	@Autowired
	private VariablesDao variablesDao;
	
	@Autowired
	private ProjectsDao projectsDao;
	
	/**
	 * Method for getting List of {@link Variables} from csv file
	 * @param csvFile - {@link InputStream} of csv file
	 * @return {@link List}<{@link Variables}>
	 */
	public List<Variables> getVariablesFromCSV(InputStream csvFile){
		CSVParser parser = new CSVParser();
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
	public String createDerivedFromOriginal(InputStream csvFile, List<Variables> variables, boolean save, Datasets originalDataset, Projects project) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(csvFile);
		List<String> derivedHeaders = new ArrayList<>();
		//remove all variables from holder
		DerivedVariablesHolder.getInstance().removeAll();
		
		List<List<String[]>> listRows = new ArrayList<>();
		for (Variables variable : variables) {
			if(variable.isLeaveAsItIs()) {
				List<String> variableValues = new ArrayList<>();
				List<String[]> rows = processor.getRows();
				// get variable values
				for (String[] row : rows) {
					for (int i = 0; i < row.length; i++) {
						if (variable.getColumnNumber() == i) {
							variableValues.add(row[i]);
						}
					}
				}
				//transform to string
				List<String[]> stringValues = new ArrayList<>();
				for(int i = 0; i < variableValues.size(); i++) {
					String[] s = new String[1];
					s[0] = String.valueOf(variableValues.get(i));
					stringValues.add(s);
				}
				//add to headers
				derivedHeaders.add(variable.getVariableName());
				listRows.add(stringValues);
				this.createDerivedVariableAndPutInHolder(variable, variable.getVariableName());
			}
			if(variable.isDistinct()) {
				List<String> distinctHeaders = this.findDistinctFromCSV(variable, processor);
				List<String[]> values = this.getValuesDistinctTransformed(variable, processor, distinctHeaders);
				listRows.add(values);
				//add to headers
				derivedHeaders.addAll(distinctHeaders);
			}
			if(variable.getTypeOfData().equals(DataType.NUMERIC)) {
				if(variable.getBins() != null) {
					//binning operation
					HashMap<String, Object> binningMap = this.binningOperation(variable, processor);
					derivedHeaders.addAll((Collection<? extends String>) binningMap.get(AppConstants.HEADERS_KEY));
					listRows.add((List<String[]>) binningMap.get(AppConstants.ROWS_KEY));
				} else if(variable.getScaleMin() != null && variable.getScaleMax() != null) {
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
					//add to holder
					this.createDerivedVariableAndPutInHolder(variable, variable.getVariableName());
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

		List<String[]> listFullRows = new ArrayList<>();
		
		int global = 0;
		for(int s = 0; s < processor.getRows().size(); s++) {
			String[] rullRow = new String[sizes];
			int i = 0;
			int k = 0;
			for (List<String[]> list : listRows) {
				for (int j = 0; j < list.get(k).length; j++) {
					rullRow[i] = list.get(global)[j];
					i++;
				}
				k++;

			}
			listFullRows.add(rullRow);
			global++;
		}
		
		//write csv
		String csv = writeSimpleCsv(headers, listFullRows, save, originalDataset, project);
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
		////////
		// find min
		Double globalMin = listValues.stream().mapToDouble(v -> v).min().getAsDouble();
		// find max
		Double globalMax = listValues.stream().mapToDouble(v -> v).max().getAsDouble();
		///////
		for (Double value : listValues) {
			String[] row = new String[variable.getBins()];
			for(int i = 0; i < variable.getBins(); i++) {
				row[i] = this.performBinningOperation(value, variable.getBins(), i, globalMin, globalMax);
			}
			rows.add(row);
		}
		
		//get headers
		List<String> headers = new ArrayList<>();
		
		for(int i = 0; i < variable.getBins(); i++) {
			String header = variable.getVariableName() + i;
			headers.add(header);
		}
		
		//Add variables to holder
		for (String header : headers) {
			this.createDerivedVariableAndPutInHolder(variable, header);
		}
		
		returnMap.put(AppConstants.HEADERS_KEY, headers);
		returnMap.put(AppConstants.ROWS_KEY, rows);
		
		return returnMap;
	}

	/**
	 * Method for finding range in which value belongs. 
	 * <p>Range is defined from
	 * <p> <code>globalMin + (increment*(globalMax-globalMin)/bins)</code>
	 * <p> to 
	 * <p><code>globalMin + ((increment+1)*(globalMax-globalMin)/bins)</code>
	 * @param x - the value for which the range should be found
	 * @param bins - for defining range
	 * @param increment - value can be from 0 to bins
	 * @param globalMin - minimum value from whole dataset
	 * @param globalMax - maximum value from whole dataset
	 * @return "1" if value x belongs to given range or "0" if not.
	 */
	private String performBinningOperation(double x, Integer bins, int increment, Double globalMin, Double globalMax) {
		double min = globalMin + (increment*(globalMax-globalMin)/bins);
		double max = globalMin + ((increment+1)*(globalMax-globalMin)/bins);
		
		if(x >= min && x <= max) {
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
		Double inMin = listValues.stream().mapToDouble(v -> v).min().getAsDouble();
		Double inMax = listValues.stream().mapToDouble(v -> v).max().getAsDouble();
		List<Double> transformedValues = new ArrayList<>();
		for (Double value : listValues) {
			Double transformedValue = this.mapRangeToAnother(value, inMin, inMax, variable.getScaleMin(), variable.getScaleMax());
			transformedValues.add(transformedValue);
		}
		
		return transformedValues;
	}

	/**
	 * Method for transforming value from one range to another
	 * @param x - value that need to be transformed
	 * @param inMin - min value of actual range
	 * @param inMax - max value of actual range
	 * @param outMin - min value of range in which value need to be transformed
	 * @param outMax - max value of range in which value need to be transformed
	 * @return transformed value
	 */
	private Double mapRangeToAnother(Double x, Double inMin, Double inMax, double outMin, double outMax) {
		return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
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
		
		for (String header : listAllValues) {
			this.createDerivedVariableAndPutInHolder(variable, header);
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
		for (String header : distinctList) {
			this.createDerivedVariableAndPutInHolder(variable, header);
		}
		
		return distinctList;
	}
	
	private void createDerivedVariableAndPutInHolder(Variables variable, String header) {
		
		Variables derivedVariable = new Variables();
		derivedVariable.setOriginalVariable(variable);
		derivedVariable.setBins(variable.getBins());
		derivedVariable.setDistinct(variable.isDistinct());
		derivedVariable.setLeaveAsItIs(variable.isLeaveAsItIs());
		derivedVariable.setScaleMax(variable.getScaleMax());
		derivedVariable.setScaleMin(variable.getScaleMin());
		derivedVariable.setTypeOfVariable(variable.getTypeOfVariable());
		derivedVariable.setVariableName(header);
		DerivedVariablesHolder.getInstance().addToDerivedVariables(derivedVariable);
	}

	public String uploadCSVFile(MultipartFile csvFile) throws IOException{
		
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
		
		List<Variables> listVariables = variablesDao.findByDataset(dataset);
		for (Variables variable : listVariables) {
			variable.setDataset(null);
		}
		
		datasetDto.setNumberOfVariables(listVariables.size());
		datasetDto.setNumberOfRows(dataset.getNoOfRows());
		
		datasetDto.setDatasetSize(dataset.getDatasetSize());
		List<Projects> listProjects = this.findProjectsByOriginalDataset(dataset);
		datasetDto.setListProjects(listProjects);
		datasetDto.setVariableDetails(listVariables);
		return datasetDto;
	}
	
	
	/**
	 * Method for getting list of projects for given original dataset
	 * @param dataset - {@link Datasets}
	 * @return {@link List}<{@link Projects}>
	 */
	private List<Projects> findProjectsByOriginalDataset(Datasets dataset) {
		List<Datasets> derivedDatasets = datasetsDao.findDerivedByOriginal(dataset);
		List<Projects> listProjects = new ArrayList<>();
		for (Datasets derivedDataset : derivedDatasets) {
			Projects project = projectsDao.findByDataset(derivedDataset);
			listProjects.add(project);
		}
		return listProjects;
	}

	/**
	 * Method for generating csv file from given headers and rows. If flag save is true then csv file will be saved to local disk. 
	 * @param headers - headers for csv file
	 * @param rows - rows for csv file
	 * @param save - true/false
	 * @param originalDataset - original {@link Datasets}
	 * @return String csvFile
	 */
	public String writeSimpleCsv(String[] headers, List<String[]> rows, boolean save, Datasets originalDataset, Projects project) {

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
				String originalFilename = originalDataset.getFilename();
				String extension = originalFilename.substring(originalFilename.length()-4, originalFilename.length());
				String derivedFilename = originalFilename.substring(0, originalFilename.length()-4) + AppConstants.DERIVED + project.getId() + extension;
				OutputStream outputStream = new FileOutputStream(derivedFilename);//"C:\\Temp\\testCSVDerived.csv"
				csvResult.writeTo(outputStream);
			}
			return csv;

		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}

	
	/**
	 * Method for saving derived variable and derived variable values
	 * @param derivedIs - {@link InputStream} built from derived CSV file
	 * @param derivedDataset - derived {@link Datasets}
	 */
	public void saveDerivedVariableAndValues(InputStream derivedIs, Datasets derivedDataset) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(derivedIs);
		List<String[]> rows = processor.getRows();
		String[] headers = processor.getHeaders();
		
		List<Variables> derivedFromHolder = DerivedVariablesHolder.getInstance().getDerivedVariables();
		
		for(int i = 0; i < headers.length; i++) {
			for (Variables derivedVariablefromHolder : derivedFromHolder) {
				if(derivedVariablefromHolder.getVariableName().equals(headers[i])) {
					String[] firstRow = processor.getRows().get(0);
					String firstValue = firstRow[i];
					if(NumberUtils.isCreatable(firstValue)) {
						derivedVariablefromHolder.setTypeOfData(DataType.NUMERIC);
					}else {
						derivedVariablefromHolder.setTypeOfData(DataType.TEXT);
					}
					derivedVariablefromHolder.setColumnNumber(i);
					derivedVariablefromHolder.setDataset(derivedDataset);
					derivedVariablefromHolder = (Variables) variablesDao.merge(derivedVariablefromHolder);
					for (String[] row : rows) {
						for(int j = 0; j < row.length; j++) {
							if(derivedVariablefromHolder.getColumnNumber() == j) {
								//save derived variable value
								DerivedVariableValue variableValue = new DerivedVariableValue();
								variableValue.setValue(row[j]);
								variableValue.setVariable(derivedVariablefromHolder);
								derivedVariableValuesDao.attachDirty(variableValue);
							}
						}
					}
				}
			}	
		}
		DerivedVariablesHolder.getInstance().removeAll();
	}

	/**
	 * Method used for saving derived dataset based given on original dataset
	 * @param originalDataset - original {@link Datasets}
	 * @return saved derived {@link Datasets}
	 */
	public Datasets saveDerivedDatasetFromOriginal(Datasets originalDataset, Projects project) {
//		Datasets derivedDataset = new Datasets();
		Datasets derivedDataset = datasetsDao.getDerivedFromProject(project.getId());
		derivedDataset.setName(originalDataset.getName() + AppConstants.DERIVED + project.getId());
		
		String originalFilename = originalDataset.getFilename();
		String extension = originalFilename.substring(originalFilename.length()-4, originalFilename.length());
		String derivedFilename = originalFilename.substring(0, originalFilename.length()-4) + AppConstants.DERIVED + project.getId() + extension;
		
		derivedDataset.setFilename(derivedFilename);
		derivedDataset.setOriginalDataset(originalDataset);
		derivedDataset.setProject(project);
		derivedDataset.setFlagFinal(true);
		Datasets savedDerivedDataset = (Datasets) datasetsDao.merge(derivedDataset);//new Datasets()
		return savedDerivedDataset;
	}

	/**
	 * Method for getting statistics fro given variable
	 * @param variable - {@link Variables} object
	 * @return VariableDto
	 * @deprecated use instead {@link #getVariableStatisticsByDataset(Datasets)}
	 */
	@SuppressWarnings("unused")
	@Deprecated
	public VariableDto getVariableStatistics(Variables variable) {
		VariableDto variableDto = new VariableDto();
		Datasets dataset = datasetsDao.findByVariable(variable);
		File file = new File(dataset.getFilename());
		try (InputStream is = new FileInputStream(file)){
			//get values for variable from CSV file
			CSVParser parser = new CSVParser();
			RowListProcessor processor = parser.parceFile(is);
			List<String> variableValues = new ArrayList<>();
			List<String[]> rows = processor.getRows();
			for (String[] row : rows) {
				for(int i = 0; i < row.length; i++) {
					if(variable.getColumnNumber() == i) {
						variableValues.add(row[i]);
					}
				}
			}
			
			if(!variableValues.isEmpty()) {
				if(NumberUtils.isCreatable(variableValues.get(0))) {
					//convert do double
					List<Double> doubleList = variableValues.stream().map(Double::valueOf).collect(Collectors.toList());
					
					//find min
					Double min = doubleList.stream().mapToDouble(v -> v).min().getAsDouble();
					variableDto.setMin(min);
					
					//find max
					Double max = doubleList.stream().mapToDouble(v -> v).max().getAsDouble();
					variableDto.setMax(max);
					
					//find average
					Double average = doubleList.stream().mapToDouble(a -> a).average().getAsDouble();
					variableDto.setAverage(average);
					
					//find variance
					Variance variance = new Variance();
					Double[] valuesArr = new Double[doubleList.size()];
					valuesArr = doubleList.toArray(valuesArr);
					double[] valuesArrPrimitive = ArrayUtils.toPrimitive(valuesArr);
					double varianceValue = variance.evaluate(valuesArrPrimitive);
					variableDto.setVarience(varianceValue);
				}else {
					//find distinct count
					List<String> distinctList = variableValues.stream().distinct().collect(Collectors.toList());
					variableDto.setDistinctCount(distinctList.size());
				}
			}
			
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return variableDto;
	}

	
	/**
	 * Method for getting Variables details (name, min, max, average, variance, distinct count) by given dataset 
	 * @param dataset - {@link Datasets}
	 * @return List of {@link VariableDto} 
	 * @deprecated use instead {@link #setVariableStatistics(List, InputStream)}
	 */
	@Deprecated
	public List<VariableDto> getVariableStatisticsByDataset(Datasets dataset) {
		List<VariableDto> variableDetails = new ArrayList<>();
		try {

			File file = new File(dataset.getFilename());
			InputStream is = new FileInputStream(file);
			List<Variables> variables = new ArrayList<>();
			CSVParser parser = new CSVParser();
			RowListProcessor processor = parser.parceFile(is);
			// get variables from csv
			String[] headers = processor.getHeaders();
			for (int i = 0; i < headers.length; i++) {
				if (!processor.getRows().isEmpty()) {
					Variables variable = new Variables();
					variable.setVariableName(headers[i]);
					String[] firstRow = processor.getRows().get(0);
					String firstValue = firstRow[i];

					if (NumberUtils.isCreatable(firstValue)) {
						variable.setTypeOfData(DataType.NUMERIC);
					} else {
						variable.setTypeOfData(DataType.TEXT);
					}
					variable.setColumnNumber(i);
					variables.add(variable);
				}

			}

			List<String[]> rows = processor.getRows();
			for (Variables variable : variables) {
				List<String> variableValues = new ArrayList<>();
				VariableDto variableDto = new VariableDto();
				variableDto.setVariableName(variable.getVariableName());

				// get variable values
				for (String[] row : rows) {
					for (int i = 0; i < row.length; i++) {
						if (variable.getColumnNumber() == i) {
							variableValues.add(row[i]);
						}
					}
				}

				if (!variableValues.isEmpty()) {
					if (NumberUtils.isCreatable(variableValues.get(0))) {
						// convert do double
						List<Double> doubleList = variableValues.stream().map(Double::valueOf)
								.collect(Collectors.toList());

						// find min
						Double min = doubleList.stream().mapToDouble(v -> v).min().getAsDouble();
						variableDto.setMin(min);

						// find max
						Double max = doubleList.stream().mapToDouble(v -> v).max().getAsDouble();
						variableDto.setMax(max);

						// find average
						Double average = doubleList.stream().mapToDouble(a -> a).average().getAsDouble();
						variableDto.setAverage(average);

						// find variance
						Variance variance = new Variance();
						Double[] valuesArr = new Double[doubleList.size()];
						valuesArr = doubleList.toArray(valuesArr);
						double[] valuesArrPrimitive = ArrayUtils.toPrimitive(valuesArr);
						double varianceValue = variance.evaluate(valuesArrPrimitive);
						variableDto.setVarience(Utilities.round(varianceValue, 2));
					} else {
						// find distinct count
						List<String> distinctList = variableValues.stream().distinct().collect(Collectors.toList());
						variableDto.setDistinctCount(distinctList.size());
					}
					variableDetails.add(variableDto);
				}

			}

		} catch (FileNotFoundException e) {
			throw new RuntimeException(e);
		}

		return variableDetails;
	}

	/**
	 * Method for getting details from csv file(name, min, max, average, variance, distinct count) for each variable
	 * @param listVariables
	 * @param is - of CSV file
	 * @return List of Variables with statistics
	 */
	public List<Variables> setVariableStatistics(List<Variables> listVariables, InputStream is) {

		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(is);

		List<String[]> rows = processor.getRows();
		for (Variables variable : listVariables) {
			List<String> variableValues = new ArrayList<>();

			// get variable values
			for (String[] row : rows) {
				for (int i = 0; i < row.length; i++) {
					if (variable.getColumnNumber() == i) {
						variableValues.add(row[i]);
					}
				}
			}

			if (!variableValues.isEmpty()) {
				if (NumberUtils.isCreatable(variableValues.get(0))) {
					// convert do double
					List<Double> doubleList = variableValues.stream().map(Double::valueOf).collect(Collectors.toList());

					// find min
					Double min = doubleList.stream().mapToDouble(v -> v).min().getAsDouble();
					variable.setMin(min);

					// find max
					Double max = doubleList.stream().mapToDouble(v -> v).max().getAsDouble();
					variable.setMax(max);

					// find average
					Double average = doubleList.stream().mapToDouble(a -> a).average().getAsDouble();
					variable.setAverage(average);

					// find variance
					Variance variance = new Variance();
					Double[] valuesArr = new Double[doubleList.size()];
					valuesArr = doubleList.toArray(valuesArr);
					double[] valuesArrPrimitive = ArrayUtils.toPrimitive(valuesArr);
					double varianceValue = variance.evaluate(valuesArrPrimitive);
					variable.setVariance(Utilities.round(varianceValue, 2));
				} 
				// find distinct count
				List<String> distinctList = variableValues.stream().distinct().collect(Collectors.toList());
				variable.setDistinctCount(distinctList.size());
			}

		}
		return listVariables;
	}
}
