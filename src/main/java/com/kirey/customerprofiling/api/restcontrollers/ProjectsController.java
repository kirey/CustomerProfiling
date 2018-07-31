package com.kirey.customerprofiling.api.restcontrollers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.data.dao.ProjectsDao;
import com.kirey.customerprofiling.data.entity.Projects;

/**
 * 
 * @author kitanoskan
 *
 */
@RestController
@RequestMapping("/projects")  //posle postaviti na /rest/projects
public class ProjectsController {

	@Autowired ProjectsDao projectDao;
	
	/**
	 * Returns all projects from db
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getAllProjects() {	
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectDao.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "/projectDetails/{id}", method = RequestMethod.GET)
	public ResponseEntity<RestResponseDto> getProjectDetails(@PathVariable Integer id) {	
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectDao.findById(id), HttpStatus.OK.value()), HttpStatus.OK);
		
	}
	
	
	@RequestMapping(value = "/addProjectDetail", method = RequestMethod.POST)
	public ResponseEntity<RestResponseDto> addProjectDetail(@RequestBody Projects project) {
		
		projectDao.persist(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully added", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/editProjectDetail", method = RequestMethod.PUT)
	public ResponseEntity<RestResponseDto> editProjectDetail(@RequestBody Projects project) {
	
		projectDao.attachDirty(project);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully edited", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/deleteProjectDetail/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<RestResponseDto> deleteProjectDetail(@PathVariable Integer id) {
		
		
		projectDao.delete(projectDao.findById(id));
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully deleted", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/copyProjectDetail/{id}", method = RequestMethod.GET)
    public ResponseEntity<RestResponseDto> copyProjectDetail(@PathVariable Integer id) {
		
		Projects oldProject = (Projects)projectDao.findById(id);
		
		Projects newProject = new Projects();
		
		newProject.setId(oldProject.getId());
		newProject.setProjectName(oldProject.getProjectName());
		newProject.setCreationDate(new Date());
		newProject.setStatus(oldProject.getStatus());
		newProject.setDatasets(oldProject.getDatasets());
		newProject.setDescription(oldProject.getDescription());
		newProject.setLastOpened(oldProject.getLastOpened());
		newProject.setProjectsAlgorithmsList(oldProject.getProjectsAlgorithmsList());
		
		
		projectDao.attachDirty(newProject);
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully copied", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
}
