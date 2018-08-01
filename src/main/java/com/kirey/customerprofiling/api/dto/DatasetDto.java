package com.kirey.customerprofiling.api.dto;

import java.io.Serializable;
import java.util.List;

import com.kirey.customerprofiling.data.entity.Projects;

public class DatasetDto implements Serializable {

	private static final long serialVersionUID = 4987038072366014688L;

	private String datasetName;
	private int numberOfColumns;
	private int numberOfVariables;
	private int datasetSize;
	private String datasetDesc;
	private Projects project;
	
	
	public String getDatasetName() {
		return datasetName;
	}
	public void setDatasetName(String datasetName) {
		this.datasetName = datasetName;
	}
	public int getNumberOfColumns() {
		return numberOfColumns;
	}
	public void setNumberOfColumns(int numberOfColumns) {
		this.numberOfColumns = numberOfColumns;
	}
	public int getNumberOfVariables() {
		return numberOfVariables;
	}
	public void setNumberOfVariables(int numberOfVariables) {
		this.numberOfVariables = numberOfVariables;
	}
	public int getDatasetSize() {
		return datasetSize;
	}
	public void setDatasetSize(int datasetSize) {
		this.datasetSize = datasetSize;
	}
	public String getDatasetDesc() {
		return datasetDesc;
	}
	public void setDatasetDesc(String datasetDesc) {
		this.datasetDesc = datasetDesc;
	}
	public Projects getProject() {
		return project;
	}
	public void setProject(Projects project) {
		this.project = project;
	}
	
	
}
