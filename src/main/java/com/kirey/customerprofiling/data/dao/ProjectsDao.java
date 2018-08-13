package com.kirey.customerprofiling.data.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.UserAccounts;
import com.kirey.customerprofiling.security.SecurityUtils;

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
	
	
	/**
	 * Method for getting project by Algorithm Id
	 * @param algorithmId
	 * @return 
	 */
	public Projects findProjectByAlgorithmId(Integer algorithmId) {
		
		String hql = "select p from Projects p, ProjectsAlgorithms pa, Datasets d "
				+ "where pa.algorithm.id=:algorithmId "
				+ "and pa.project.id=pa.algorithm.id";
		
		Projects project = (Projects) sessionFactory.getCurrentSession().createQuery(hql).setParameter("algorithmId", algorithmId).uniqueResult();
		return project;
	}

	/**
	 * Method for getting list of filtered projects by given user
	 * @param userId - of {@link UserAccounts}c
	 * @return List of filtered {@link Projects}
	 */
	public List<Projects> findFilteredByUser(Integer userId) {
		String hql = "from Projects p where p.userAccount.id = :userId";
		List<Projects> projects = sessionFactory.getCurrentSession().createQuery(hql).setParameter("userId", userId).list();
		return projects;
	}

	/**
	 * Method checks does given project belong to logged user
	 * @param projectId - of {@link Projects}
	 * @return true if belong / false if not
	 */
	public boolean belongToLoggedUser(Integer projectId) {
		UserAccounts user = SecurityUtils.getUserFromContext();
		Projects project = this.findById(projectId);
		
		if(user != null && project.getUserAccount().getId().equals(user.getId())) {
			return true;
		}else {
			return false;	
		}
		
	}
	
}
