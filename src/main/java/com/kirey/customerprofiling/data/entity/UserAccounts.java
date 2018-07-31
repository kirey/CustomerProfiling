package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



@Entity
@Table(name = "user_accounts")
public class UserAccounts implements Serializable{

	
	private static final long serialVersionUID = -8800545744984448614L;
	
	private Integer id;
	private String username;
	private String password;
	private String email;
	private String firstName;
	private String lastName;
	private String socketSessionId;
	private String role;
	
	@Id
	@SequenceGenerator(name = "seq_users_gen", sequenceName = "seq_users", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_users_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "username", nullable = false, unique = true)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	@Column(name = "email")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "first_name")
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	@Column(name = "last_name")
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Column(name = "socket_session_id")
	public String getSocketSessionId() {
		return socketSessionId;
	}
	public void setSocketSessionId(String socketSessionId) {
		this.socketSessionId = socketSessionId;
	}
	
	@Column(name = "role", nullable = false)
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	
	

	
	
}
