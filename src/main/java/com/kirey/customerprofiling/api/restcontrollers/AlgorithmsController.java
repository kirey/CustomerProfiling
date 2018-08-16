package com.kirey.customerprofiling.api.restcontrollers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.data.dao.AlgorithmsDao;
import com.kirey.customerprofiling.data.dao.DatasetsDao;
import com.kirey.customerprofiling.data.dao.ParameterValuesDao;
import com.kirey.customerprofiling.data.dao.ParametersDao;
import com.kirey.customerprofiling.data.dao.ProjectAlgorithmsDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.entity.Algorithms;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.ParameterValues;
import com.kirey.customerprofiling.data.entity.Parameters;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;
import com.kirey.customerprofiling.data.entity.Variables;

@RestController
@RequestMapping("/rest/algorithms")
public class AlgorithmsController {

	@Autowired 
	private AlgorithmsDao algorithmsDao;
	
	@Autowired 
	private ProjectAlgorithmsDao projectAlgorithmsDao;
	
	@Autowired 
	private ParametersDao parametersDao;
	
	@Autowired
	private ProjectsDao projectsDao;
	
	@Autowired
	private ParameterValuesDao parameterValuesDao;
	
	@Autowired
	private DatasetsDao datasetsDao;

	/**
	 * Get list of all algorithms
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAllAlgorithms(){

		List<Algorithms> allAlgorithm = algorithmsDao.findAll();
		
		for (Algorithms algorithm : allAlgorithm) {
			List<Parameters> listParameters = algorithm.getParameters();
			for (Parameters parameter : listParameters) {
				parameter.setParameterValues(null);
			}		
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(allAlgorithm, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Get Algorithm details
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAlgorithmDetails(@PathVariable Integer id){
		Algorithms algorithm = algorithmsDao.findById(id);
		List<Parameters> listParameters = algorithm.getParameters();
		for (Parameters parameter : listParameters) {
			parameter.setParameterValues(null);
		}	
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(algorithm, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Add new algorithm with parameters
	 * @param algorithm
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addAlgorithm(@RequestBody Algorithms algorithm){
		
		List<Parameters> parametersList = algorithm.getParameters();
		algorithmsDao.attachDirty(algorithm);	

		for (Parameters parameter : parametersList) {
			parameter.setAlgorithm(algorithm);
			parametersDao.attachDirty(parameter);
		}
				
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Algorithm added", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Add selected algorithm to project
	 * @param project
	 * @param algorithmId
	 * @return
	 */
	@RequestMapping(value = "/addAlgorithmToProject", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addAlgorithmToProject(@RequestBody Projects project, @RequestParam Integer algorithmId){
		
		ProjectsAlgorithms projectAlgorithm = new ProjectsAlgorithms();
		projectAlgorithm.setProject(project);
		projectAlgorithm.setAlgorithm(algorithmsDao.findById(algorithmId));
		projectAlgorithmsDao.attachDirty(projectAlgorithm);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Algorithm added to project", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	/**
	 * Delete algorithm if not exists in ProjectsAlgorithm
	 * @param project
	 * @param algorithmId
	 * @return
	 */
	@RequestMapping(value = "/deleteAlgorithm/{algorithmId}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> deleteAlgorithm(@PathVariable Integer algorithmId){
		
		if( algorithmsDao.findById(algorithmId) == null)
			return new ResponseEntity<RestResponseDto>(new RestResponseDto("Algorithm doesn't exist", HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
		
		
		if(algorithmsDao.relatedWithProject(algorithmId)) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto("Algorithm already exist in project,can't be deleted", HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
		} 
		
		Algorithms algorithm = (Algorithms)algorithmsDao.findById(algorithmId);
		List<Parameters> listParameters = algorithm.getParameters();
		
		for(Parameters parameter : listParameters) {
			parametersDao.delete(parameter);			
		}
		algorithmsDao.delete(algorithm);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Deleted successfully", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	/**
	 * Edit algorithm 
	 * @param algorithmId
	 * @return
	 */
	@RequestMapping(value = "/editAlgorithm", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> editAlgorithm(@RequestBody Algorithms algorithm){
		
        List<Parameters> listParameters = algorithm.getParameters();
		
		for(Parameters parameter : listParameters) {
			parameter.setAlgorithm(algorithm);
			parametersDao.attachDirty(parameter);			
		}
		algorithmsDao.attachDirty(algorithm);
	
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Edited successfully", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	/**
	 * Method for getting List of {@link Algorithms} with parameters and values by given project
	 * @param projectId - id of {@link Projects}
	 * @return ResponseEntity containing the list of algorithms along with HTTP status
	 */
	@RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAlgorithmsForProject(@PathVariable Integer projectId) {
		Projects project = projectsDao.findById(projectId);
		List<Algorithms> listAlgorithms = new ArrayList<>();
		List<Algorithms> listAlgorithmsFromDb = projectAlgorithmsDao.findAlgorithmsByProject(projectId);
		//for each algorithm from db find values for certain project
		for (Algorithms algorithm : listAlgorithmsFromDb) {
			List<Parameters> listParameters = algorithm.getParameters();
			ProjectsAlgorithms projectsAlgorithm = projectAlgorithmsDao.findByProjectAndAlgorithms(project, algorithm);
			for (Parameters parameter : listParameters) {
				List<ParameterValues> listParametersValues = parameterValuesDao.findByProjectAlgorithmAndParameter(projectsAlgorithm, parameter);
				parameter.setParameterValues(listParametersValues);
			}
			listAlgorithms.add(algorithm);
		}
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listAlgorithms, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for editing algorithm parameters that are in relation with project
	 * @param algorithm
	 * @return ResponseEntity containing the status message along with HTTP status
	 */
	@RequestMapping(value = "/parameters", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> editAlgorithmProjectParameters(@RequestBody Algorithms algorithm) {
		List<Parameters> parameters = algorithm.getParameters();
		for (Parameters parameter : parameters) {
			List<ParameterValues> values = parameter.getParameterValues();
			for (ParameterValues parameterValue : values) {
				ParameterValues valueFromDb = parameterValuesDao.findById(parameterValue.getId());
				valueFromDb.setValue(parameterValue.getValue());;
				parameterValuesDao.attachDirty(valueFromDb);
			}
		}
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Parameters updated", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for removing algorithm from project
	 * @param projectId - of {@link Projects}
	 * @param algorithmId - of {@link Algorithms}
	 * @return ResponseEntity containing the status message along with HTTP status
	 */
	@RequestMapping(value = "/remove/project/{projectId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> removeAlgorithmFromProject(@PathVariable Integer projectId, @RequestParam Integer algorithmId){
		Projects project = projectsDao.findById(projectId);
		Algorithms algorithm = algorithmsDao.findById(algorithmId);
		ProjectsAlgorithms projectAlgorithm = projectAlgorithmsDao.findByProjectAndAlgorithms(project, algorithm);
		List<ParameterValues> paramValues = parameterValuesDao.findByProjectAlgorithm(projectAlgorithm.getId());
		for (ParameterValues paramValue : paramValues) {
			parameterValuesDao.delete(paramValue);
		}
		projectAlgorithmsDao.delete(projectAlgorithm);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Algorithm removed", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting List of algorithms which are not assigned to given project
	 * @param projectId - of {@link Projects}
	 * @return ResponseEntity containing the list of algorithms along with HTTP status
	 */
	@RequestMapping(value = "/filtered/project/{projectId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getFilteredAlgorithmsForProject(@PathVariable Integer projectId){
		List<Algorithms> listAlgorithms = algorithmsDao.findAll();
		
		List<Algorithms> listFilteredAlgorithms = new ArrayList<>();
		List<ProjectsAlgorithms> listProjectsAlgorithms = projectAlgorithmsDao.findByProject(projectId);
		for (Algorithms algorithm : listAlgorithms) {
			boolean flag = true;
			for (ProjectsAlgorithms projectsAlgorithm : listProjectsAlgorithms) {
				if(algorithm.getId().equals(projectsAlgorithm.getAlgorithm().getId())) {
					flag = false;
				}
			}
			if(flag) {
				List<Parameters> paramList = algorithm.getParameters();
				for (Parameters parameters : paramList) {
					ParameterValues paramValue = new ParameterValues();
					paramValue.setValue(parameters.getDefaultValue());
					List<ParameterValues> listParamValues = new ArrayList<>();
					listParamValues.add(paramValue);
					parameters.setParameterValues(listParamValues);
				}
				listFilteredAlgorithms.add(algorithm);
			}
		}
			
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listFilteredAlgorithms, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/save/project/{projectId}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addAlgorithmToProject(@PathVariable Integer projectId, @RequestBody Algorithms algorithm){
		
		Projects project = projectsDao.findById(projectId);
		project.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
		projectsDao.merge(project);
		ProjectsAlgorithms projectsAlgorithms = projectAlgorithmsDao.findByProjectAndAlgorithms(project, algorithm);
		if(projectsAlgorithms == null) {
			projectsAlgorithms = new ProjectsAlgorithms();	
		}
		projectsAlgorithms.setAlgorithm(algorithm);
		projectsAlgorithms.setProject(project);
		projectsAlgorithms.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
		projectsAlgorithms = (ProjectsAlgorithms) projectAlgorithmsDao.merge(projectsAlgorithms);
		List<Parameters> parameters = algorithm.getParameters();
		for (Parameters parameter : parameters) {
			List<ParameterValues> parameterValues = parameter.getParameterValues();
			for (ParameterValues parameterValue : parameterValues) {
				parameterValue.setProjectAlgorithms(projectsAlgorithms);
				parameterValue.setParameter(parameter);
				parameterValuesDao.attachDirty(parameterValue);
			}
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully saved", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	
	
	
	
	/**
	 * Method for analyzing given algorithm
	 * @param algorithm - {@link Algorithms} object with parameters and values
	 * @return ResponseEntity containing the analyzed algorithm along with HTTP status
	 * @throws InterruptedException 
	 */
	@RequestMapping(value = "/analyze", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> analizeAlgorithm(@RequestBody List<Algorithms> algorithms, @RequestParam Integer projectId) throws InterruptedException{
		Projects project = projectsDao.findById(projectId);
		Datasets derivedDataset = datasetsDao.getDerivedFromProject(projectId);
		if(derivedDataset == null) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto("There is no derived dataset connected to project!", HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
		}else {
			project.setStatus(AppConstants.PROJECT_STATUS_LEARNING);
			projectsDao.merge(project);
			for (Algorithms algorithm : algorithms) {
				ProjectsAlgorithms projectAlgorithm = projectAlgorithmsDao.findByProjectAndAlgorithms(project, algorithm);
				projectAlgorithm.setStatus(AppConstants.ALGORITHM_STATUS_LEARNING);
				projectAlgorithmsDao.attachDirty(projectAlgorithm);
				//simulate training of algorithm
				TimeUnit.SECONDS.sleep(10);
				projectAlgorithm.setStatus(AppConstants.ALGORITHM_STATUS_TRAINED);
				projectAlgorithmsDao.attachDirty(projectAlgorithm);
			}
			
			project.setStatus(AppConstants.ALGORITHM_STATUS_TRAINED);
			projectsDao.merge(project);
		}
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Allgorithms trained", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for getting status of algorithm that is in relation with given project
	 * @param projectId
	 * @return ResponseEntity containing the HashMap with algorithm id as key and status as value along with HTTP status
	 */
	@RequestMapping(value = "/status", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> algorithmStatus(@RequestParam Integer projectId) {
//		Map<Object, Object> responseMap = new HashMap<>();
//		List<ProjectsAlgorithms> listProjectAlgorithms = projectAlgorithmsDao.findByProject(projectId);
//		for (ProjectsAlgorithms projectsAlgorithms : listProjectAlgorithms) {
//			responseMap.put(projectsAlgorithms.getId(), projectsAlgorithms.getStatus());
//		}
		Projects project = projectsDao.findById(projectId);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(project.getStatus(), HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for saving List of algorithms with parameters and values for given project
	 * @param algorithms - List of {@link Algorithms}
	 * @param projectId - id of {@link Projects}
	 * @return ResponseEntity containing the status message along with HTTP status
	 */
	@RequestMapping(value = "/submit", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> saveAlgorithmsToProject(@RequestBody List<Algorithms> algorithms, @RequestParam Integer projectId){

		
		Projects project = projectsDao.findById(projectId);
		
		for (Algorithms algorithm : algorithms) {
			ProjectsAlgorithms projectsAlgorithms = projectAlgorithmsDao.findByProjectAndAlgorithms(project, algorithm);
			if(projectsAlgorithms == null) {
				projectsAlgorithms = new ProjectsAlgorithms();	
			}
			projectsAlgorithms.setAlgorithm(algorithm);
			projectsAlgorithms.setProject(project);
			projectsAlgorithms = (ProjectsAlgorithms) projectAlgorithmsDao.merge(projectsAlgorithms);
			List<Parameters> parameters = algorithm.getParameters();
			for (Parameters parameter : parameters) {
				List<ParameterValues> parameterValues = parameter.getParameterValues();
				for (ParameterValues parameterValue : parameterValues) {
					parameterValue.setProjectAlgorithms(projectsAlgorithms);
					parameterValue.setParameter(parameter);
					parameterValuesDao.attachDirty(parameterValue);
				}
			}
		}
		
		projectsDao.merge(project);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully updated project", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
}
