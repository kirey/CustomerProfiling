package com.kirey.customerprofiling.api.restcontrollers;

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
import com.kirey.customerprofiling.data.dao.AlgorithmsDao;
import com.kirey.customerprofiling.data.dao.ParametersDao;
import com.kirey.customerprofiling.data.entity.Algorithms;
import com.kirey.customerprofiling.data.entity.Parameters;

@RestController
@RequestMapping("/rest/algorithms")
public class AlgorithmsController {

	@Autowired 
	private AlgorithmsDao algorithmsDao;
	
	@Autowired 
	private ParametersDao parametersDao;

	/**
	 * Get list of all algorithms
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> getAllAlgorithms(){
				
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(algorithmsDao.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
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
}
