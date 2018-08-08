package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
	private Double scaleMax;
	private Double scaleMin;
	private Datasets dataset;
 	private Integer bins;
	private boolean leaveAsItIs;
	private boolean distinct;
	private Double min;
	private Double max;
	private Double average;
	private Double variance;
	private Integer distinctCount;
	
	private Variables originalVariable;
	@JsonBackReference("variablesDerivedVariables")
	private List<Variables> derivedVariables = new ArrayList<>();
	@JsonBackReference("variablesDerivedVariablesValues")
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
	
	@Column(name = "name", nullable = false)
	public String getVariableName() {
		return variableName;
	}
	public void setVariableName(String variableName) {
		this.variableName = variableName;
	}
	
	@Column(name = "column_number", nullable = false)
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
	
	

	@Column(name = "type_of_data", nullable = false)
	@Enumerated(EnumType.STRING)
	public DataType getTypeOfData() {
		return typeOfData;
	}
	public void setTypeOfData(DataType typeOfData) {
		this.typeOfData = typeOfData;
	}
	
	@Column(name = "scale_max")
	public Double getScaleMax() {
		return scaleMax;
	}
	public void setScaleMax(Double scaleMax) {
		this.scaleMax = scaleMax;
	}
	
	@Column(name = "scale_min")
	public Double getScaleMin() {
		return scaleMin;
	}
	public void setScaleMin(Double scaleMin) {
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
	
	@Column(name = "bins")
	public Integer getBins() {
		return bins;
	}
	public void setBins(Integer bins) {
		this.bins = bins;
	}
	
	@Column(name = "fl_leave_as_it_is")
	public boolean isLeaveAsItIs() {
		return leaveAsItIs;
	}
	public void setLeaveAsItIs(boolean leaveAsItIs) {
		this.leaveAsItIs = leaveAsItIs;
	}
	
	@Column(name = "fl_distinct")
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
	
	@Column(name = "min")
	public Double getMin() {
		return min;
	}
	public void setMin(Double min) {
		this.min = min;
	}
	
	@Column(name = "max")
	public Double getMax() {
		return max;
	}
	public void setMax(Double max) {
		this.max = max;
	}
	
	@Column(name = "average")
	public Double getAverage() {
		return average;
	}
	public void setAverage(Double average) {
		this.average = average;
	}
	
	@Column(name = "variance")
	public Double getVariance() {
		return variance;
	}
	public void setVariance(Double variance) {
		this.variance = variance;
	}
	
	@Column(name = "distinct_count")
	public Integer getDistinctCount() {
		return distinctCount;
	}
	public void setDistinctCount(Integer distinctCount) {
		this.distinctCount = distinctCount;
	}

	
	
	

}
