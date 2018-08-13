package com.kirey.customerprofiling.security;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.kirey.customerprofiling.data.entity.UserAccounts;

/**
 * @author paunovicm
 *
 */

public class SecurityUtils {
	
	/**
	 * Method for getting logged user from security context  
	 * @return {@link UserAccounts}
	 */
	public static UserAccounts getUserFromContext() {

		SecurityContext securityContext = SecurityContextHolder.getContext();
		Object details = null;

		try {
			details = securityContext.getAuthentication().getPrincipal();
		} catch (NullPointerException e) {
			details = null;
		}

		UserAccounts user = null;
		if (details != null && details instanceof UserAccounts) {
			user = (UserAccounts) details;
		}

		return user;
	}
	

}
