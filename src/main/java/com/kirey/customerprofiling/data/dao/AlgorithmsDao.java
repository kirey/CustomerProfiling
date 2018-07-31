package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Algorithms;

@Repository(value = "algorithmsDao")
public class AlgorithmsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public AlgorithmsDao() {
		log = LogFactory.getLog(AlgorithmsDao.class);
		entityClass = Algorithms.class;
    }
	
}
