package com.kirey.customerprofiling.api.restcontrollers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.dao.DerivedVariableValuesDao;
import com.kirey.customerprofiling.data.dao.ParameterValuesDao;
import com.kirey.customerprofiling.data.dao.ProjectAlgorithmsDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.dao.VariablesDao;
import com.kirey.customerprofiling.data.entity.Algorithms;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.DerivedVariableValue;
import com.kirey.customerprofiling.data.entity.ParameterValues;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;
import com.kirey.customerprofiling.data.entity.UserAccounts;
import com.kirey.customerprofiling.data.entity.Variables;
import com.kirey.customerprofiling.security.SecurityUtils;

/**
 * 
 * @author kitanoskan
 *
 */
@RestController
@RequestMapping("/rest/projects")
public class ProjectsController {

	@Autowired
	private ProjectsDao projectsDao;
	
	@Autowired
	private DatasetsDao datasetsDao;
	
	@Autowired
	private VariablesDao variablesDao;
	
	@Autowired
	private DerivedVariableValuesDao derivedVariableValuesDao;
	
	@Autowired
	private ProjectAlgorithmsDao projectAlgorithmsDao;
	
	@Autowired
	private ParameterValuesDao parameterValuesDao;
	

	
	/**
	 * Method for getting list of filtered projects by given user
	 * @return ResponseEntity containing the list of filtered projects along with HTTP status
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getFilteredProjectsByUser() {	
		
		UserAccounts user = SecurityUtils.getUserFromContext();
		if(user == null) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "You need to be logged to access projects"), HttpStatus.BAD_REQUEST);
		}
		
		List<Projects> listProjects = projectsDao.findFilteredByUser(user.getId());
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listProjects, HttpStatus.OK.value()), HttpStatus.OK);
		
	}
	
	
	
	/**
	 * Returns project by id 
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getProjectDetails(@PathVariable Integer id) {	
		HashMap<String, Object> responeseMap = new HashMap<>();
		boolean belong = projectsDao.belongToLoggedUser(id);
		if(!belong) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "You are not authorized to view details for this project"), HttpStatus.BAD_REQUEST);
		}else {
			Projects project = projectsDao.findById(id);
			responeseMap.put("project", project);
			List<Algorithms> algorithms = projectAlgorithmsDao.findAlgorithmsByProject(project.getId());
			responeseMap.put("algorithms", algorithms);
			Datasets dataset = datasetsDao.findOriginalByProject(project.getId());
			responeseMap.put("dataset", dataset);
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(responeseMap, HttpStatus.OK.value()), HttpStatus.OK);
		}
		
	}
	
	/**
	 * Add new project to db 
	 * 
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addProjectDetail(@RequestBody Projects project) {
		
		UserAccounts user = SecurityUtils.getUserFromContext();
		
		project.setCreationDate(new Date());
		project.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
		project.setUserAccount(user);
		projectsDao.persist(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Successfully added"), HttpStatus.OK);
	}
	
	/**
	 * Edit existing project 
	 * 
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> editProjectDetail(@RequestBody Projects project) {
	
		UserAccounts user = SecurityUtils.getUserFromContext();
		project.setUserAccount(user);
		projectsDao.attachDirty(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Successfully edited"), HttpStatus.OK);
	}
	
	/**
	 * Delete project by id 
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> deleteProjectDetail(@PathVariable Integer id) {
		
		
		Projects project = (Projects)projectsDao.findById(id);
		Datasets dataset =  project.getDatasets();
		
		if ( dataset != null) {
			List<Variables> listVariables = dataset.getVariables();
			for (Variables variable : listVariables) {
				List<DerivedVariableValue> listValues = derivedVariableValuesDao.findByVariable(variable);
				for (DerivedVariableValue value : listValues) {
					derivedVariableValuesDao.delete(value);
				}
				variablesDao.delete(variable);
			}
			int datasetId = dataset.getId();
			datasetsDao.delete(datasetId);
		}
		
		
		List<ProjectsAlgorithms> listProjectsAlgorithms = projectAlgorithmsDao.findByProject(project.getId());
		for (ProjectsAlgorithms projectsAlgorithms : listProjectsAlgorithms) {
			List<ParameterValues> listParameterValues = parameterValuesDao.findByProjectAlgorithm(projectsAlgorithms.getId());
			for (ParameterValues parameterValues : listParameterValues) {
				parameterValuesDao.delete(parameterValues);
			}
			projectAlgorithmsDao.delete(projectsAlgorithms);
		}
		projectsDao.delete(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Successfully deleted"), HttpStatus.OK);
	}
	
	/**
	 * Copy existing project(find existing project by Id) and copy to new project
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/copy", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RestResponseDto> copyProjectDetail( @RequestBody Projects project) {
		//TODO check copy just project detail or relation with algorithms and dataset
		//copy project details
		Projects newProject = new Projects();
		UserAccounts user = SecurityUtils.getUserFromContext();
		newProject.setProjectName(project.getProjectName());
		newProject.setCreationDate(new Date());
		newProject.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
		newProject.setDescription(project.getDescription());
		newProject.setLastOpened(new Date());
		newProject.setUserAccount(user);
		
		Projects copiedProject = (Projects) projectsDao.merge(newProject);
		
		//create empty derived dataset from given dataset and connect with copied project 
		Datasets dataset = datasetsDao.findOriginalByProject(project.getId());
		if(dataset != null) {
			Datasets derivedDataset = new Datasets();
			derivedDataset.setOriginalDataset(dataset);
			derivedDataset.setName(dataset.getName() + AppConstants.DERIVED + copiedProject.getId());
			derivedDataset.setFlagFinal(false);
			derivedDataset.setProject(copiedProject);
			datasetsDao.attachDirty(derivedDataset);
		}
		
		//connect with copied project algorithms from original project
		List<Algorithms> connectedAlgorithms = projectAlgorithmsDao.findAlgorithmsByProject(project.getId());
		for (Algorithms algorithm : connectedAlgorithms) {
			ProjectsAlgorithms projectAlgorithm = new ProjectsAlgorithms();
			projectAlgorithm.setAlgorithm(algorithm);
			projectAlgorithm.setProject(copiedProject);
			projectAlgorithm.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
			projectAlgorithmsDao.attachDirty(projectAlgorithm);
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "Successfully copied"), HttpStatus.OK);
	}
	
	
}
