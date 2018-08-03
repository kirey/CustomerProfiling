package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;

@Repository(value = "projectAlgorithmsDao")
public class ProjectAlgorithmsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public ProjectAlgorithmsDao() {
		log = LogFactory.getLog(ProjectAlgorithmsDao.class);
		entityClass = ProjectsAlgorithms.class;
	}

	
	public List<ProjectsAlgorithms> findByProject(Integer projectId) {
		String hql = "from ProjectsAlgorithms pa where pa.project.id = :projectId";
		List<ProjectsAlgorithms> listProjectAlgorithm = sessionFactory.getCurrentSession().createQuery(hql).setParameter("projectId", projectId).list();
		return listProjectAlgorithm;
	}

}
