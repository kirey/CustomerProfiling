package com.kirey.customerprofiling.data.entity;

import org.springframework.security.core.GrantedAuthority;

public class Roles implements GrantedAuthority{
	
	private static final long serialVersionUID = -2958491707558971234L;
	
	
	private String role;
	
	
	public Roles(String role) {
		super();
		this.role = role;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}



	@Override
	public String getAuthority() {
		return this.role;
	}

}
