package com.kirey.customerprofiling.common.constants;

public enum DataType {

	NUMERIC("NUMERIC"),
	TEXT("TEXT");
	
	private String desc;

	public String getDesc()
	{ return desc; }
	
	private DataType(String desc)
	{ this.desc = desc; }
}
