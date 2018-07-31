package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.DerivedVariableValue;


@Repository(value = "derivedVariableValuesDao")
public class DerivedVariableValuesDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public DerivedVariableValuesDao() {
		log = LogFactory.getLog(DerivedVariableValuesDao.class);
		entityClass = DerivedVariableValue.class;
	}

}
