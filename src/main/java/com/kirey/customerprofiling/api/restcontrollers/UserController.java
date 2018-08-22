package com.kirey.customerprofiling.api.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.RestResponseDto;
import com.kirey.customerprofiling.data.dao.UserAccountsDao;
import com.kirey.customerprofiling.data.entity.UserAccounts;

@RestController
@RequestMapping("/rest/user")
public class UserController {
	
	@Autowired
	private UserAccountsDao userAccountsDao;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	
	
	/**
	 * Method used for return list of all users
	 * @param 
	 * @return Response entity with list of user accounts along http status
	 */
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> allUserAccounts() {
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(userAccountsDao.findAll(), HttpStatus.OK.value()), HttpStatus.OK);
	}
	
	
	/**
	 * Method used for add user account
	 * @param userAccount
	 * @return Response entity with status message along http status
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RestResponseDto> addUserAccount(@RequestBody UserAccounts userAccount) {
		
		UserAccounts user = userAccountsDao.findByUsername(userAccount.getUsername());
		
		if(user!=null) {
			return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.BAD_REQUEST.value(), "User already exists"), HttpStatus.BAD_REQUEST);	
		}
		
		userAccount.setPassword(encoder.encode(userAccount.getPassword()));
		userAccountsDao.attachDirty(userAccount);
		
		return new ResponseEntity<RestResponseDto>(new RestResponseDto(HttpStatus.OK.value(), "User successfully added"), HttpStatus.OK);
	}
	
	
	
	
	
	
	
	

}
