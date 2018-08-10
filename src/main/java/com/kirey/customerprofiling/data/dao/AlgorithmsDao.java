package com.kirey.customerprofiling.data.dao;

import java.util.List;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Algorithms;

@Repository(value = "algorithmsDao")
@Transactional
public class AlgorithmsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public AlgorithmsDao() {
		log = LogFactory.getLog(AlgorithmsDao.class);
		entityClass = Algorithms.class;
    }

	
	@SuppressWarnings("unchecked")
	public List<Algorithms> findAlgortithmsByProject(Integer projectId) {
		
		String hql = "select pa.algorithm from ProjectsAlgorithms pa where pa.project.id = :projectId";
		
		List<Algorithms> algorithms = sessionFactory.getCurrentSession().createQuery(hql).setParameter("projectId", projectId).getResultList();
		
		return algorithms;
	}
	
	
	/**
	 * If Algorithm not exists in ProjectsAlgorithm
	 * @param algorithmId
	 * @return TRUE if Algorithm doesn't exist in ProjectAlgorithms
	 */
	@SuppressWarnings("unused")
	public boolean isAlgorithmNotExistInProjectAlgorithms(Integer algorithmId) {
		
		String hql = "Select a from Algorithms a where a.id=:algorithmId "
				+ "and not exists "
				+ "( Select 1 "
				+ "from ProjectsAlgorithms pa "
				+ "where pa.algorithm.id=:algorithmId )";
		
		try {
			Algorithms algorithm = (Algorithms)sessionFactory.getCurrentSession().createQuery(hql).setParameter("algorithmId", algorithmId).getSingleResult();
			return true;
		}catch (NoResultException e) {	
			return false;
		}
		
	}
}



   
