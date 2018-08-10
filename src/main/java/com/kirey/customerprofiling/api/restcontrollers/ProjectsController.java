package com.kirey.customerprofiling.api.restcontrollers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.common.constants.AppConstants;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.entity.Projects;

/**
 * 
 * @author kitanoskan
 *
 */
@RestController
@RequestMapping("/rest/projects")
public class ProjectsController {

	@Autowired ProjectsDao projectsDao;
	
	
	/**
	 * Returns all projects from db
	 * @return
	 */
	
//	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAllProjects() {	
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectsDao.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
		
	}
	
	
	
	/**
	 * Returns project by id 
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getProjectDetails(@PathVariable Integer id) {	
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectsDao.findById(id), HttpStatus.OK.value()), HttpStatus.OK);
		
	}
	
	/**
	 * Add new project to db 
	 * 
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addProjectDetail(@RequestBody Projects project) {
		
		project.setCreationDate(new Date());
		project.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
		
		projectsDao.persist(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully added", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Edit existing project 
	 * 
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> editProjectDetail(@RequestBody Projects project) {
	
		
		projectsDao.attachDirty(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully edited", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Delete project by id 
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> deleteProjectDetail(@PathVariable Integer id) {
		
		projectsDao.delete(projectsDao.findById(id));
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully deleted", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	/**
	 * Copy existing project(find existing project by Id) and copy to new project
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/copy", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RestResponseDto> copyProjectDetail( @RequestBody Projects project) {
		
		Projects newProject = new Projects();
		
		newProject.setProjectName(project.getProjectName());
		newProject.setCreationDate(new Date());
		newProject.setStatus(project.getStatus());
//		newProject.setDatasets(project.getDatasets());
		newProject.setDescription(project.getDescription());
		newProject.setLastOpened(new Date());
//		newProject.setProjectsAlgorithmsList(project.getProjectsAlgorithmsList());
		
		
		projectsDao.attachDirty(newProject);
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully copied", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
}
