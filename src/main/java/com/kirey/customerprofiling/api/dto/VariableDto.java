package com.kirey.customerprofiling.api.dto;

public class VariableDto {

	private Double average;
	private Double min;
	private Double max;
	private Double varience;
	private Integer distinctCount;
	public Double getAverage() {
		return average;
	}
	public void setAverage(Double average) {
		this.average = average;
	}
	public Double getMin() {
		return min;
	}
	public void setMin(Double min) {
		this.min = min;
	}
	public Double getMax() {
		return max;
	}
	public void setMax(Double max) {
		this.max = max;
	}
	public Double getVarience() {
		return varience;
	}
	public void setVarience(Double varience) {
		this.varience = varience;
	}
	public Integer getDistinctCount() {
		return distinctCount;
	}
	public void setDistinctCount(Integer distinctCount) {
		this.distinctCount = distinctCount;
	}
	
	
	
}
