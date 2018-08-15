package com.kirey.customerprofiling.data.dao;

import java.util.List;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Algorithms;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;

@Repository(value = "algorithmsDao")
@Transactional
public class AlgorithmsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public AlgorithmsDao() {
		log = LogFactory.getLog(AlgorithmsDao.class);
		entityClass = Algorithms.class;
    }

	/**
	 * Method for getting list of algorithms by given project
	 * @param projectId - of {@link Projects}
	 * @return List of {@link Algorithms}
	 */
	@SuppressWarnings("unchecked")
	public List<Algorithms> findAlgortithmsByProject(Integer projectId) {
		
		String hql = "select pa.algorithm from ProjectsAlgorithms pa where pa.project.id = :projectId";
		
		List<Algorithms> algorithms = sessionFactory.getCurrentSession().createQuery(hql).setParameter("projectId", projectId).getResultList();
		
		return algorithms;
	}
	
	
	/**
	 * If Algorithm not exists in ProjectsAlgorithm
	 * @param algorithmId
	 * @return TRUE if Algorithm exists in ProjectAlgorithms
	 */
	@SuppressWarnings("unused")
	public boolean relatedWithProject(Integer algorithmId) {		
		String hql = "from ProjectsAlgorithms pa where pa.algorithm.id = :algorithmId";		
		List<ProjectsAlgorithms> projectAlgorithm = sessionFactory.getCurrentSession().createQuery(hql).setParameter("algorithmId", algorithmId).list();		
		if(projectAlgorithm != null && !projectAlgorithm.isEmpty()) {
			return true;
		}else {
			return false;
		}
	}
}



   
