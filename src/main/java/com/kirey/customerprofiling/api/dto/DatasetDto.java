package com.kirey.customerprofiling.api.dto;

import java.io.Serializable;
import java.util.List;

import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.Variables;

public class DatasetDto implements Serializable {

	private static final long serialVersionUID = 4987038072366014688L;

	private String datasetName;
	private Integer numberOfRows;
	private Integer numberOfVariables;
	private Double datasetSize;
	private String datasetDesc;
//	private Projects project;
	private List<Projects> listProjects;
	private List<Variables> variableDetails;
	
	
	public String getDatasetName() {
		return datasetName;
	}
	public void setDatasetName(String datasetName) {
		this.datasetName = datasetName;
	}
	
	public Integer getNumberOfRows() {
		return numberOfRows;
	}
	public void setNumberOfRows(Integer numberOfRows) {
		this.numberOfRows = numberOfRows;
	}
	public Integer getNumberOfVariables() {
		return numberOfVariables;
	}
	public void setNumberOfVariables(Integer numberOfVariables) {
		this.numberOfVariables = numberOfVariables;
	}
	public Double getDatasetSize() {
		return datasetSize;
	}
	public void setDatasetSize(Double datasetSize) {
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
	public List<Variables> getVariableDetails() {
		return variableDetails;
	}
	public void setVariableDetails(List<Variables> variableDetails) {
		this.variableDetails = variableDetails;
	}
	
	
	
	
}
