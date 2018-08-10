package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.ParameterValues;
import com.kirey.customerprofiling.data.entity.Parameters;
import com.kirey.customerprofiling.data.entity.ProjectsAlgorithms;

@Repository(value = "parameterValuesDao")
public class ParameterValuesDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public ParameterValuesDao() {
		log = LogFactory.getLog(ParameterValuesDao.class);
		entityClass = ParameterValues.class;
	}

	/**
	 * Method for getting list of {@link ParameterValues} by given {@link ProjectsAlgorithms} and given {@link Parameters}
	 * @param projectsAlgorithm 
	 * @param parameter
	 * @return list of ParameterValues
	 */
	public List<ParameterValues> findByProjectAlgorithmAndParameter(ProjectsAlgorithms projectsAlgorithm, Parameters parameter) {
		String hql = "from ParameterValues pv where pv.parameter.id = :paramId and pv.projectAlgorithms.id = :projectAlgId";
		List<ParameterValues> listParamValues = sessionFactory.getCurrentSession().createQuery(hql).setParameter("paramId", parameter.getId()).setParameter("projectAlgId", projectsAlgorithm.getId()).list();
		return listParamValues;
	}
	
	/**
	 * Method for getting list of {@link ParameterValues} by {@link ProjectsAlgorithms}
	 * @param projAlgId - of {@link ProjectsAlgorithms}
	 * @return list of ParameterValues
	 */
	public List<ParameterValues> findByProjectAlgorithm(Integer projAlgId) {
		String hql = "from ParameterValues pv where pv.projectAlgorithms.id = :projAlgId";
		List<ParameterValues> listParamValues = sessionFactory.getCurrentSession().createQuery(hql).setParameter("projAlgId", projAlgId).list();
		return listParamValues;
	}

}
