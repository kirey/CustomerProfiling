package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Parameters;

@Repository(value = "parametersDao")
public class ParametersDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public ParametersDao() {
		log = LogFactory.getLog(ParametersDao.class);
		entityClass = Parameters.class;
    }

}
