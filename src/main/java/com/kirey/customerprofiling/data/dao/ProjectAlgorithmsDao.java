package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Algorithms;
import com.kirey.customerprofiling.data.entity.Projects;
import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;

@Repository(value = "projectAlgorithmsDao")
public class ProjectAlgorithmsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public ProjectAlgorithmsDao() {
		log = LogFactory.getLog(ProjectAlgorithmsDao.class);
		entityClass = ProjectsAlgorithms.class;
	}

	/**
	 * Method for getting List of {@link ProjectsAlgorithms} by {@link Projects}
	 * @param projectId - of {@link Projects}
	 * @return {@link List}<{@link ProjectsAlgorithms}>
	 */
	public List<ProjectsAlgorithms> findByProject(Integer projectId) {
		String hql = "from ProjectsAlgorithms pa where pa.project.id = :projectId";
		List<ProjectsAlgorithms> listProjectAlgorithm = sessionFactory.getCurrentSession().createQuery(hql).setParameter("projectId", projectId).list();
		return listProjectAlgorithm;
	}

	/**
	 * Method for getting {@link ProjectsAlgorithms} by {@link Projects} and {@link Algorithms}
	 * @param project
	 * @param algorithm
	 * @return {@link ProjectsAlgorithms}
	 */
	public ProjectsAlgorithms findByProjectAndAlgorithms(Projects project, Algorithms algorithm) {
		String hql = "from ProjectsAlgorithms pa where pa.project.id = :projectId and pa.algorithm.id = :algorithmId";
		ProjectsAlgorithms projectsAlgorithms = (ProjectsAlgorithms) sessionFactory.getCurrentSession().createQuery(hql).setParameter("projectId", project.getId()).setParameter("algorithmId", algorithm.getId()).uniqueResult();
		return projectsAlgorithms;
	}

}
