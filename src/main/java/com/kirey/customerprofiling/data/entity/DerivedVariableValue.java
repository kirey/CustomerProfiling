package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "derived_variable_values")
public class DerivedVariableValue implements Serializable{


	private static final long serialVersionUID = -484206537736480081L;
	
	private Integer id;
	private String value;
	private Variables variable;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
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
