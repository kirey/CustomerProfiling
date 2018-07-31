package com.kirey.customerprofiling.data.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.StandardCharsets;
import java.util.List;

import com.univocity.parsers.common.processor.BeanListProcessor;
import com.univocity.parsers.common.processor.RowListProcessor;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

/**
 * Class for parsing csv files
 * @author paunovicm
 *
 */
public class CSVParser {

	/**
	 * A RowListProcessor stores each parsed row in a List. Get headers with
	 * String[] headers = rowProcessor.getHeaders() Get rows wiht List<String[]>
	 * rows = rowProcessor.getRows()
	 * 
	 * @param inputStream
	 * @return RowListProcessor
	 */
	public RowListProcessor parceFile(InputStream inputStream) {
		RowListProcessor rowProcessor = new RowListProcessor();
		try {

			CsvParserSettings parserSettings = new CsvParserSettings();
			// You can configure the parser to automatically
			// detect what line separator sequence is in the
			// input
			parserSettings.setLineSeparatorDetectionEnabled(true);
			parserSettings.setDelimiterDetectionEnabled(true);

			parserSettings.setProcessor(rowProcessor);

			// Let's consider the first parsed row as the
			// headers of each column in the file.
			parserSettings.setHeaderExtractionEnabled(true);
			// creates a parser instance with the given settings
			CsvParser parser = new CsvParser(parserSettings);

			Reader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
			parser.parse(reader);

			reader.close();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return rowProcessor;
	}

	/**
	 * Parse input stream object to java object
	 * 
	 * @param <T>
	 * @param className
	 * @param inputStream
	 * @return List of beans
	 */
	public <T> List parseFile(T object, InputStream inputStream) {

		Object obj = null;
		List<T> beans = null;
		try {
			// parser setings
			CsvParserSettings parserSettings = new CsvParserSettings();
			parserSettings.setHeaderExtractionEnabled(true);
			parserSettings.setLineSeparatorDetectionEnabled(true);
			parserSettings.setDelimiterDetectionEnabled(true);
			parserSettings.setReadInputOnSeparateThread(false);

			// reader
			Reader reader = new BufferedReader(new InputStreamReader(inputStream));
			
			// BeanListProcessor converts each parsed row to an instance of
			// a given class, then stores each instance into a list.
			BeanListProcessor<T> rowProcessor = new BeanListProcessor(object.getClass());

			parserSettings.setProcessor(rowProcessor);
			CsvParser parser = new CsvParser(parserSettings);
			parser.parse(reader);

			// The BeanListProcessor provides a list of objects extracted from
			// the input.
			beans = rowProcessor.getBeans();
			reader.close();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return beans;
	}

}
