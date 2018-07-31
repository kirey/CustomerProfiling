package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.kirey.customerprofiling.common.constants.ColumnType;
import com.kirey.customerprofiling.common.constants.DataType;



@Entity
@Table(name = "variables")
public class Variables implements Serializable{

	
	private static final long serialVersionUID = -7157561051981969806L;
	
	private Integer id;
	private String variableName;
	private Integer columnNumber;
	private ColumnType typeOfVariable;
	private DataType typeOfData;
	private double scaleMax;
	private double scaleMin;
	private Datasets dataset;
 	private Integer bins;
	private boolean leaveAsItIs;
	private boolean distinct;
	private Variables originalVariable;
	private List<Variables> derivedVariables = new ArrayList<>();
	private List<DerivedVariableValue> derivedVariableValues = new ArrayList<>();
	
	@Id
	@SequenceGenerator(name = "seq_variables_gen", sequenceName = "seq_variables", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_variables_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "variable_name", nullable = false)
	public String getVariableName() {
		return variableName;
	}
	public void setVariableName(String variableName) {
		this.variableName = variableName;
	}
	
	@Column(name = "column_number")
	public Integer getColumnNumber() {
		return columnNumber;
	}
	public void setColumnNumber(Integer columnNumber) {
		this.columnNumber = columnNumber;
	}
	
	
	@Column(name = "type_of_variable")
	public ColumnType getTypeOfVariable() {
		return typeOfVariable;
	}
	public void setTypeOfVariable(ColumnType typeOfVariable) {
		this.typeOfVariable = typeOfVariable;
	}
	
	
	@Column(name = "type_of_data")
	public DataType getTypeOfData() {
		return typeOfData;
	}
	public void setTypeOfData(DataType typeOfData) {
		this.typeOfData = typeOfData;
	}
	
	@Column(name = "scale_max", nullable = false)
	public double getScaleMax() {
		return scaleMax;
	}
	public void setScaleMax(double scaleMax) {
		this.scaleMax = scaleMax;
	}
	
	@Column(name = "scale_min", nullable = false)
	public double getScaleMin() {
		return scaleMin;
	}
	public void setScaleMin(double scaleMin) {
		this.scaleMin = scaleMin;
	}
	
	
	@ManyToOne
	@JoinColumn(name = "dataset")
	public Datasets getDataset() {
		return dataset;
	}
	public void setDataset(Datasets dataset) {
		this.dataset = dataset;
	}
	
	@Column(name = "bins", nullable = false)
	public Integer getBins() {
		return bins;
	}
	public void setBins(Integer bins) {
		this.bins = bins;
	}
	
	@Column(name = "leave_as_it_is", nullable = false)
	public boolean isLeaveAsItIs() {
		return leaveAsItIs;
	}
	public void setLeaveAsItIs(boolean leaveAsItIs) {
		this.leaveAsItIs = leaveAsItIs;
	}
	
	@Column(name = "distinct", nullable = false)
	public boolean isDistinct() {
		return distinct;
	}
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}
	
	
	@OneToMany(mappedBy = "originalVariable")
	public List<Variables> getDerivedVariables() {
		return derivedVariables;
	}
	public void setDerivedVariables(List<Variables> derivedVariables) {
		this.derivedVariables = derivedVariables;
	}
	
	
	@ManyToOne()
	@JoinColumn(name = "original_variable")
	public Variables getOriginalVariable() {
		return originalVariable;
	}
	public void setOriginalVariable(Variables originalVariable) {
		this.originalVariable = originalVariable;
	}
	
	
	@OneToMany(mappedBy = "variable")
	public List<DerivedVariableValue> getDerivedVariableValues() {
		return derivedVariableValues;
	}
	
	public void setDerivedVariableValues(List<DerivedVariableValue> derivedVariableValues) {
		this.derivedVariableValues = derivedVariableValues;
	}

	
	
	

}
