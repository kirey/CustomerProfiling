package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;



/**
 * 
 * @author kitanoskan
 *
 */
@Entity
@Table(name = "projects")
public class Projects implements Serializable{

	
	private static final long serialVersionUID = -565919285485939231L;
	
	private Integer id;
	private String projectName;
	private Date creationDate; 
	private Date lastOpened;
	private String status;
	private String description;
	@JsonBackReference
	private List<ProjectsAlgorithms> projectsAlgorithmsList = new ArrayList<>();
	@JsonIgnore
	private Datasets datasets;
	
	@Id
	@SequenceGenerator(name = "seq_projects_gen", sequenceName = "seq_projects", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_projects_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable=false, unique = true)
	public String getProjectName() {
		return projectName;
	}
	
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	@Column(name = "creation_date", nullable=false)
	public Date getCreationDate() {
		return creationDate;
	}
	
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	
	@Column(name = "last_opened")
	public Date getLastOpened() {
		return lastOpened;
	}
	
	public void setLastOpened(Date lastOpened) {
		this.lastOpened = lastOpened;
	}
	
	@Column(name = "status", nullable=false)
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(mappedBy = "project", fetch=FetchType.LAZY)
//	@LazyCollection(LazyCollectionOption.FALSE)
	public List<ProjectsAlgorithms> getProjectsAlgorithmsList() {
		return projectsAlgorithmsList;
	}

	public void setProjectsAlgorithmsList(List<ProjectsAlgorithms> projectsAlgorithmsList) {
		this.projectsAlgorithmsList = projectsAlgorithmsList;
	}
	
	@OneToOne(mappedBy = "project", fetch=FetchType.LAZY)
	public Datasets getDatasets() {
		return datasets;
	}

	public void setDatasets(Datasets datasets) {
		this.datasets = datasets;
	}
	
}
