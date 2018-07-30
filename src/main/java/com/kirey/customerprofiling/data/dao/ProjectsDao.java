package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Projects;

/**
 * 
 * @author kitanoskan
 *
 */
@Repository(value = "projectsDao")
public class ProjectsDao extends KjcBaseDao{

	@Autowired SessionFactory sessionFactory;
	
	public ProjectsDao() {
		log = LogFactory.getLog(ProjectsDao.class);
		entityClass = Projects.class;
	}
	
}
