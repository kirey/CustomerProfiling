package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.kirey.customerprofiling.data.entity.Variables;

@Repository(value = "variablesDao")
public class VariablesDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public VariablesDao() {
		log = LogFactory.getLog(VariablesDao.class);
		entityClass = Variables.class;
	}

}
