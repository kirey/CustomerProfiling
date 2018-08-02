package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name = "algorithms")
public class Algorithms implements Serializable {

	private static final long serialVersionUID = 8747814031067494068L;
	

	private Integer id;
	private String algorithmName;
	private String description;
	private String library;
	@JsonIgnore
	private List<ProjectsAlgorithms> projectAlgorithamsList = new ArrayList<>();
	@JsonBackReference
	private List<Parameters> parameters = new ArrayList<>();
	
	
	@Id
	@SequenceGenerator(name = "seq_algorithms_gen", sequenceName = "seq_algorithms", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_algorithms_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false, unique = true)
	public String getAlgorithmName() {
		return algorithmName;
	}
	public void setAlgorithmName(String algorithmName) {
		this.algorithmName = algorithmName;
	}
	
	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@Column(name = "library", nullable = false)
	public String getLibrary() {
		return library;
	}
	public void setLibrary(String library) {
		this.library = library;
	}

	@OneToMany(mappedBy = "algorithm", fetch = FetchType.EAGER)
	public List<Parameters> getParameters() {
		return parameters;
	}
	public void setParameters(List<Parameters> parameters) {
		this.parameters = parameters;
	}
	
	@OneToMany(mappedBy = "algorithm")
	public List<ProjectsAlgorithms> getProjectAlgorithamsList() {
		return projectAlgorithamsList;
	}
	public void setProjectAlgorithamsList(List<ProjectsAlgorithms> projectAlgorithamsList) {
		this.projectAlgorithamsList = projectAlgorithamsList;
	}


}