package com.kirey.customerprofiling.data.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "datasets", uniqueConstraints = {
	      @UniqueConstraint(
	              columnNames = {"name", "project"},
	              name="datasets_name_project_uk"
	          )
	       })
public class Datasets implements Serializable{

	
	private static final long serialVersionUID = -2931711511684618845L;
	
	private Integer id;
	private String name;
	private String filename;
	private String database;
	private String schema;
	private String dbQuery;
	@JsonIgnore
	private Datasets originalDataset;
	private List<Datasets> derivedDatasets = new ArrayList<>();
	private Projects project;
	private String description;
	@JsonIgnore
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
	
	@Column(name = "filename", nullable = false)
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
	
	
	@Column(name = "db_query")
	public String getDbQuery() {
		return dbQuery;
	}
	public void setDbQuery(String dbQuery) {
		this.dbQuery = dbQuery;
	}
	
	@ManyToOne()
	@JoinColumn(name = "original_dataset")
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
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "originalDataset")
	public List<Datasets> getDerivedDatasets() {
		return derivedDatasets;
	}
	public void setDerivedDatasets(List<Datasets> derivedDatasets) {
		this.derivedDatasets = derivedDatasets;
	}
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "dataset")
	public List<Variables> getVariables() {
		return variables;
	}
	
	
	public void setVariables(List<Variables> variables) {
		this.variables = variables;
	}
	
	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
	
	
	

}
