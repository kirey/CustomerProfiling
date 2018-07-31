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


@Entity
@Table(name = "derived_variable_values")
public class DerivedVariableValue implements Serializable{


	private static final long serialVersionUID = -484206537736480081L;
	
	private Integer id;
	private String value;
	private Variables variable;
	
	@Id
	@SequenceGenerator(name = "seq_derived_variable_values_gen", sequenceName = "seq_derived_variable_values", allocationSize=1, initialValue=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_derived_variable_values_gen")
	@Column(name = "id", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "value", nullable = false)
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
	@ManyToOne
	@JoinColumn(name = "variable")
	public Variables getVariable() {
		return variable;
	}
	public void setVariable(Variables variable) {
		this.variable = variable;
	}
	
	
	

	
	
}
