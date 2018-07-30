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



@Entity
@Table(name = "datasets")
public class Datasets implements Serializable{

	
	private static final long serialVersionUID = -2931711511684618845L;
	
	private Integer id;
	private String name;
	private String filename;
	private String database;
	private String schema;
	private String dbQuerry;
	private Datasets originalDataset;
	private List<Datasets> datasets = new ArrayList<>();
	private Projects project;
	private List<Variables> variables = new ArrayList<>();
	
	
	
	@Id
	@SequenceGenerator(name = "seq_datasets_gen", sequenceName = "seq_datasets", allocationSize=1, initialValue=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_datasets_gen")
	@Column(name = "id", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "filename")
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	
	@Column(name = "database")
	public String getDatabase() {
		return database;
	}
	public void setDatabase(String database) {
		this.database = database;
	}
	
	@Column(name = "schema")
	public String getSchema() {
		return schema;
	}
	public void setSchema(String schema) {
		this.schema = schema;
	}
	
	
	@Column(name = "db_querry")
	public String getDbQuerry() {
		return dbQuerry;
	}
	public void setDbQuerry(String dbQuerry) {
		this.dbQuerry = dbQuerry;
	}
	
	@ManyToOne()
	@JoinColumn(name = "origina_dataset")
	public Datasets getOriginalDataset() {
		return originalDataset;
	}
	public void setOriginalDataset(Datasets originalDataset) {
		this.originalDataset = originalDataset;
	}
	
	@ManyToOne()
	@JoinColumn(name = "project")
	public Projects getProject() {
		return project;
	}
	public void setProject(Projects project) {
		this.project = project;
	}
	
	
	@OneToMany(mappedBy = "originalDataset")
	public List<Datasets> getDatasets() {
		return datasets;
	}
	public void setDatasets(List<Datasets> datasets) {
		this.datasets = datasets;
	}
	
	@OneToMany(mappedBy = "variable")
	public List<Variables> getVariables() {
		return variables;
	}
	public void setVariables(List<Variables> variables) {
		this.variables = variables;
	}
	
	
	
	
	
	
	

}
