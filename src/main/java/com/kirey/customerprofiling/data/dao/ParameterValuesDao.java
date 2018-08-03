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

	public List<ParameterValues> findByProjectAlgorithmAndParameter(ProjectsAlgorithms projectsAlgorithm, Parameters parameter) {
		String hql = "from ParameterValues pv where pv.parameter.id = :paramId and pv.projectAlgorithms.id = :projectAlgId";
		List<ParameterValues> listParamValues = sessionFactory.getCurrentSession().createQuery(hql).setParameter("paramId", parameter.getId()).setParameter("projectAlgId", projectsAlgorithm.getId()).list();
		return listParamValues;
	}

}
