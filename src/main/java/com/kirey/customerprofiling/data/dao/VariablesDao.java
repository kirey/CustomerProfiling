package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Variables;

@Repository(value = "variablesDao")
public class VariablesDao extends KjcBaseDao {

	@Autowired
	private SessionFactory sessionFactory;

	public VariablesDao() {
		log = LogFactory.getLog(VariablesDao.class);
		entityClass = Variables.class;
	}

	/**
	 * Method for getting list of {@link Variables} for given dataset
	 * @param dataset - {@link Datasets} object
	 * @return {@link List}<{@link Variables}>
	 */
	public List<Variables> findByDataset(Datasets dataset) {
		String hql = "from Variables vari where vari.dataset.id = :datasetId";
		List<Variables> listVariables = sessionFactory.getCurrentSession().createQuery(hql).setParameter("datasetId", dataset.getId()).list();
		return listVariables;
	}

}
