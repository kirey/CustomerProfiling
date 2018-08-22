package com.kirey.customerprofiling.api.dto;

import java.io.Serializable;


/**
 * Custom DTO used for rest responses and validation
 */
public class RestResponseDto implements Serializable {

	private static final long serialVersionUID = -4990734081656652299L;

	private String message;
	private int statusCode;
	private Object data;
	private Object validationObject;

	public RestResponseDto() {
	}

	public RestResponseDto(Object data, int statusCode) {
		this.data = data;
		this.statusCode = statusCode;
	}

	public RestResponseDto(int status, String msg) {
		this.message = msg;
		this.statusCode = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public Object getValidationObject() {
		return validationObject;
	}

	public void setValidationObject(Object validationObject) {
		this.validationObject = validationObject;
	}

}
