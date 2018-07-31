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
@Table(name = "project_algorithms")
public class ProjectsAlgorithms implements Serializable {

	
	private static final long serialVersionUID = 8923559455375607056L;
	
	
	private Integer id;
	private Projects project;
	private Algorithms algorithm;

	
	@Id
	@SequenceGenerator(name = "seq_project_algorithms_gen", sequenceName = "seq_project_algorithms", allocationSize=1, initialValue=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_project_algorithms_gen")
	@Column(name = "id", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne()
	@JoinColumn(name = "project", nullable = false)
	public Projects getProject() {
		return project;
	}

	public void setProject(Projects project) {
		this.project = project;
	}

	@ManyToOne()
	@JoinColumn(name = "algorithm", nullable = false)
	public Algorithms getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(Algorithms algorithm) {
		this.algorithm = algorithm;
	}
	
  
	
	
	
	
	

	
	
	

	

	
	
	

}
