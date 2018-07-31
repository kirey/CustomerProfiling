package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.ParameterValues;

@Repository(value = "parameterValuesDao")
public class ParameterValuesDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public ParameterValuesDao() {
		log = LogFactory.getLog(ParameterValuesDao.class);
		entityClass = ParameterValues.class;
	}

}
