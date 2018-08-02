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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "parameters", uniqueConstraints = {
	      @UniqueConstraint(
	              columnNames = {"name", "algorithm"},
	              name="parameters_name_value_type_uk"
	          )
	       })
public class Parameters implements Serializable{

	private static final long serialVersionUID = -5624897424117953346L;
	
	
	private Integer id;
	private String parameterName;
	private String parameterValueType;
	private String defaultValue;
	@JsonBackReference
	private Algorithms algorithm;
	List<ParameterValues> parameterValues = new ArrayList<>();
	
	
	@Id
	@SequenceGenerator(name = "seq_parameters_gen", sequenceName = "seq_parameters", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_parameters_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable=false)
	public String getParameterName() {
		return parameterName;
	}
	public void setParameterName(String parameterName) {
		this.parameterName = parameterName;
	}
	
	@Column(name = "value_type", nullable=false)
	public String getParameterValueType() {
		return parameterValueType;
	}
	public void setParameterValueType(String parameterValueType) {
		this.parameterValueType = parameterValueType;
	}
	
	@Column(name = "default_value")
	public String getDefaultValue() {
		return defaultValue;
	}
	public void setDefaultValue(String defaultValue) {
		this.defaultValue = defaultValue;
	}
	
	@ManyToOne
	@JoinColumn(name = "algorithm")
	public Algorithms getAlgorithm() {
		return algorithm;
	}
	public void setAlgorithm(Algorithms algorithm) {
		this.algorithm = algorithm;
	}
	
	@OneToMany(mappedBy = "parameter", fetch = FetchType.EAGER)
	public List<ParameterValues> getParameterValues() {
		return parameterValues;
	}
	public void setParameterValues(List<ParameterValues> parameterValues) {
		this.parameterValues = parameterValues;
	}
	
	
	


	
	

}
