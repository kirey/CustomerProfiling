package com.kirey.customerprofiling.data.dao;

import java.util.List;

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
	
}
