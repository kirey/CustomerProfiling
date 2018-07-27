package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * 
 * @author kitanoskan
 *
 */
@Entity
@Table(name="projects")
public class Projects implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer id;
	private String projectName;
	private Date creationDate; 
	private Date lastOpened;
	private String status;
	private String description;
	
	@Id
	@SequenceGenerator(name = "seq_projects_gen_gen", sequenceName = "seq_projects_gen", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_projects_gen_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "project_name")
	public String getProjectName() {
		return projectName;
	}
	
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	@Column(name = "creation_date")
	public Date getCreationDate() {
		return creationDate;
	}
	
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	
	@Column(name = "last_opened")
	public Date getLastOpened() {
		return lastOpened;
	}
	
	public void setLastOpened(Date lastOpened) {
		this.lastOpened = lastOpened;
	}
	
	@Column(name = "status")
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
}
