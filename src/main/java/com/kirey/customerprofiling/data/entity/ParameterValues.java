package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "parameter_values", uniqueConstraints = {
	      @UniqueConstraint(
	              columnNames = {"parameter", "project_algorithm"},
	              name="parameter_values_parameter_project_algorithm_uk"
	          )
	       })
public class ParameterValues implements Serializable{


	private static final long serialVersionUID = 3299727459981139639L;
	
	
	private Integer id;
	private String value;
	@JsonIgnore
	private Parameters parameter;
	private ProjectsAlgorithms projectAlgorithms;
	
	
	@Id
	@SequenceGenerator(name = "seq_parameter_values_gen", sequenceName = "seq_parameter_values", allocationSize=1, initialValue=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_parameter_values_gen")
	@Column(name = "id", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "value", nullable=false)
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	@ManyToOne
	@JoinColumn(name = "parameter", nullable=false)
	public Parameters getParameter() {
		return parameter;
	}
	public void setParameter(Parameters parameter) {
		this.parameter = parameter;
	}
	
	@ManyToOne
	@JoinColumn( name = "project_algorithm", nullable=false)
	public ProjectsAlgorithms getProjectAlgorithms() {
		return projectAlgorithms;
	}
	public void setProjectAlgorithms(ProjectsAlgorithms projectAlgorithms) {
		this.projectAlgorithms = projectAlgorithms;
	}
	
	
	

	

}
