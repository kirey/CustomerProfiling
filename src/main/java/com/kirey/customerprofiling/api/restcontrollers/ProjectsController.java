package com.kirey.customerprofiling.api.restcontrollers;

import java.util.Date;
import java.util.List;

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
import com.kirey.customerprofiling.data.entity.UserAccounts;
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
	
	
	/**
	 * Returns all projects from db
	 * @return
	 */
	
//	@GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
//	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<RestResponseDto> getAllProjects() {	
//		
//		return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectsDao.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
//		
//	}
	
	
	/**
	 * Method for getting list of filtered projects by given user
	 * @return ResponseEntity containing the list of filtered projects along with HTTP status
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getFilteredProjectsByUser() {	
		
		UserAccounts user = SecurityUtils.getUserFromContext();
		if(user == null) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto("You need to be logged to access projects", HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
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
		
		boolean belong = projectsDao.belongToLoggedUser(id);
		if(!belong) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto("You are not authorized to view details for this project", HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
		}else {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(projectsDao.findById(id), HttpStatus.OK.value()), HttpStatus.OK);
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
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully added", HttpStatus.OK.value()), HttpStatus.OK);
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
		UserAccounts user = SecurityUtils.getUserFromContext();
		newProject.setProjectName(project.getProjectName());
		newProject.setCreationDate(new Date());
		newProject.setStatus(AppConstants.ALGORITHM_STATUS_NOT_TRAINED);
//		newProject.setDatasets(project.getDatasets());
		newProject.setDescription(project.getDescription());
		newProject.setLastOpened(new Date());
		newProject.setUserAccount(user);
//		newProject.setProjectsAlgorithmsList(project.getProjectsAlgorithmsList());
		
		
		projectsDao.attachDirty(newProject);
		
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto("Successfully copied", HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
}
