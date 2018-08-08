package com.kirey.customerprofiling.data.dao;

import javax.transaction.Transactional;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Projects;

/**
 * 
 * @author kitanoskan
 *
 */
@Repository(value = "projectsDao")
@Transactional
public class ProjectsDao extends KjcBaseDao{

	@Autowired SessionFactory sessionFactory;
	
	public ProjectsDao() {
		log = LogFactory.getLog(ProjectsDao.class);
		entityClass = Projects.class;
	}

	/**
	 * Method for getting project by dataset
	 * @param derivedDataset - {@link Datasets}
	 * @return {@link Projects}
	 */
	public Projects findByDataset(Datasets derivedDataset) {
		String hql = "from Projects p where p.datasets.id = :datasetId";
		Projects project = (Projects) sessionFactory.getCurrentSession().createQuery(hql).setParameter("datasetId", derivedDataset.getId()).uniqueResult();
		return project;
	}
	
}
