package com.kirey.customerprofiling.data.service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Service;

import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.common.constants.DataType;
import com.kirey.customerprofiling.data.entity.Variables;
import com.univocity.parsers.common.processor.RowListProcessor;

/**
 * 
 * @author paunovicm
 *
 */

@Service
public class DatasetService {

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

	public void createDerivedFromOriginal(InputStream csvFile, List<Variables> variables) {
		CSVParser parser = new CSVParser();
		RowListProcessor processor = parser.parceFile(csvFile);
		
		for (Variables variable : variables) {
			
		}
		
	}
}
