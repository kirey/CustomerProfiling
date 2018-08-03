package com.kirey.customerprofiling.api.restcontrollers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.data.dao.AlgorithmsDao;
import com.kirey.customerprofiling.data.dao.ParameterValuesDao;
import com.kirey.customerprofiling.data.dao.ParametersDao;
import com.kirey.customerprofiling.data.dao.ProjectAlgorithmsDao;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.entity.Algorithms;
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

	/**
	 * Get list of all algorithms
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAllAlgorithms(){
		List<Algorithms> allAlgorithm = algorithmsDao.findAll();
				
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(allAlgorithm, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Get Algorithm details
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAlgorithmDetails(@PathVariable Integer id){
			
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(algorithmsDao.findById(id), HttpStatus.OK.value()), HttpStatus.OK);
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
	
	
	@RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAlgorithmsForProject(@PathVariable Integer projectId){
		List<Algorithms> listAlgorithms = new ArrayList<>();
		List<ProjectsAlgorithms> listProjectsAlgorithms = projectAlgorithmsDao.findByProject(projectId);
		for (ProjectsAlgorithms projectsAlgorithm : listProjectsAlgorithms) {
			Algorithms algorithm = projectsAlgorithm.getAlgorithm();
			List<Parameters> listParameters = algorithm.getParameters();
			for (Parameters parameter : listParameters) {
				List<ParameterValues> listParametersValues = parameterValuesDao.findByProjectAlgorithmAndParameter(projectsAlgorithm, parameter);
				parameter.setParameterValues(listParametersValues);
			}
			listAlgorithms.add(algorithm);
		}	
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(listAlgorithms, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Method for analyzing given algorithm
	 * @param algorithm - {@link Algorithms} object with parameters and values
	 * @return ResponseEntity containing the analyzed algorithm along with HTTP status
	 */
	@RequestMapping(value = "/analize", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> analizeAlgorithm(@RequestBody Algorithms algorithm){
		//TODO Analyze logic
		algorithm.setAnalized(true);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(algorithm, HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/submit", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> saveAlgorithmsToProject(@RequestBody List<Algorithms> algorithms, @RequestParam Integer projectId){

		
		Projects project = projectsDao.findById(projectId);
		
		for (Algorithms algorithm : algorithms) {
			ProjectsAlgorithms projectsAlgorithms = new ProjectsAlgorithms();
			projectsAlgorithms.setAlgorithm(algorithm);
			projectsAlgorithms.setProject(project);
			projectsAlgorithms = (ProjectsAlgorithms) projectAlgorithmsDao.merge(projectsAlgorithms);
			List<Parameters> parameters = algorithm.getParameters();
			for (Parameters parameter : parameters) {
				List<ParameterValues> parameterValues = parameter.getParameterValues();
				for (ParameterValues parameterValue : parameterValues) {
					parameterValue.setProjectAlgorithms(projectsAlgorithms);
					parameterValuesDao.attachDirty(parameterValue);
				}
			}
		}
		
		project.setStatus(AppConstants.PROJECT_STATUS_LEARNING);
		projectsDao.merge(project);
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully updated project", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
}
