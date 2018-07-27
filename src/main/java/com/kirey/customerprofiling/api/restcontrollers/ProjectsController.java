package com.kirey.customerprofiling.api.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.data.dao.ProjectsDao;

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
	
	
	
}
