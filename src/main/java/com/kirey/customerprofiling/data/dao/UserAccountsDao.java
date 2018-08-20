/**
 * 
 */
package com.kirey.customerprofiling.data.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.kirey.customerprofiling.data.entity.Roles;
import com.kirey.customerprofiling.data.entity.UserAccounts;

/**
 * @author paunovicm
 *
 */
//@Repository(value = "userAccountsDao")
public class UserAccountsDao extends KjcBaseDao implements UserDetailsService{

	@Autowired
	private SessionFactory sessionFactory;

	public UserAccountsDao() {
		log = LogFactory.getLog(UserAccountsDao.class);
		entityClass = UserAccounts.class;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String hql = "from UserAccounts ua where ua.username = :username";
		UserAccounts user = (UserAccounts) sessionFactory.getCurrentSession().createQuery(hql).setParameter("username", username).uniqueResult();
		
	    if(user == null) {
	    	throw new UsernameNotFoundException("User with username: " + username + "not found!");
	    }else {
	    	Roles role = new Roles(user.getRole());
	    	List<Roles> listRoles = new ArrayList<>();
	    	listRoles.add(role);
	    	user.setRoles(listRoles);
	    }
		return user;
	}
	

	/**
	 * Method for getting user accounts by username 
	 * @param username
	 * @return UserAccounts
	 */
	public UserAccounts findByUsername(String username) {
		String hql = "from UserAccounts ua where ua.username = :username";
		
		UserAccounts user = (UserAccounts) sessionFactory.getCurrentSession().createQuery(hql).setParameter("username", username).uniqueResult();
		return user;
	}

}
