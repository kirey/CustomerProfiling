package com.kirey.customerprofiling.api.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kirey.customerprofiling.api.dto.UserAccount;


/**
 * @author paunovicm
 *
 */

@RestController
@RequestMapping("/")
public class AuthController {
	

	@Autowired
	private AuthenticationManager authenticationManager;
	
	/**
	 * Method used for authenticate user
	 * @param userAccount
	 * @return
	 */
	@RequestMapping(value = "/authentication", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> createUser(@RequestBody UserAccount userAccount) {
		
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				userAccount.getUsername(), userAccount.getPassword());

		Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		
		return new ResponseEntity<Object>(null, HttpStatus.OK);
	}
	
	/**
	 * Method used when logout is success
	 * @return
	 */
	@RequestMapping(value = "/success/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> logout() {
		
		return new ResponseEntity<Object>(null, HttpStatus.OK);
	}
	
	/**
	 * Method to check if app works and returns response (security = perimitAll())
	 * @return
	 */
	@RequestMapping(value = "/test", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> test() {
		
		return new ResponseEntity<Object>("Test ok", HttpStatus.OK);
	}
	
	/**
	 * Method for testing security (permit role ROLE_ADMIN)
	 * @return
	 */
	@RequestMapping(value = "/test/admin", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> testAdmin() {
		
		return new ResponseEntity<Object>("Test ok admin", HttpStatus.OK);
	}
	
	/**
	 * Method for testing security (permit role ROLE_USER)
	 * @return
	 */
	@RequestMapping(value = "/test/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> testUser() {
		
		return new ResponseEntity<Object>("Test ok user", HttpStatus.OK);
	}
}
