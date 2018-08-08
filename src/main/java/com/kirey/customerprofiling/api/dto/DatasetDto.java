package com.kirey.customerprofiling.api.dto;

import java.io.Serializable;
import java.util.List;

import com.kirey.customerprofiling.data.entity.Projects;

public class DatasetDto implements Serializable {

	private static final long serialVersionUID = 4987038072366014688L;

	private String datasetName;
	private int numberOfRows;
	private int numberOfVariables;
	private double datasetSize;
	private String datasetDesc;
//	private Projects project;
	private List<Projects> listProjects;
	private List<VariableDto> variableDetails;
	
	
	public String getDatasetName() {
		return datasetName;
	}
	public void setDatasetName(String datasetName) {
		this.datasetName = datasetName;
	}
	
	public int getNumberOfRows() {
		return numberOfRows;
	}
	public void setNumberOfRows(int numberOfRows) {
		this.numberOfRows = numberOfRows;
	}
	public int getNumberOfVariables() {
		return numberOfVariables;
	}
	public void setNumberOfVariables(int numberOfVariables) {
		this.numberOfVariables = numberOfVariables;
	}
	public double getDatasetSize() {
		return datasetSize;
	}
	public void setDatasetSize(double datasetSize) {
		this.datasetSize = datasetSize;
	}
	public String getDatasetDesc() {
		return datasetDesc;
	}
	public void setDatasetDesc(String datasetDesc) {
		this.datasetDesc = datasetDesc;
	}
//	public Projects getProject() {
//		return project;
//	}
//	public void setProject(Projects project) {
//		this.project = project;
//	}
	public List<Projects> getListProjects() {
		return listProjects;
	}
	public void setListProjects(List<Projects> listProjects) {
		this.listProjects = listProjects;
	}
	public List<VariableDto> getVariableDetails() {
		return variableDetails;
	}
	public void setVariableDetails(List<VariableDto> variableDetails) {
		this.variableDetails = variableDetails;
	}
	
	
	
	
}
