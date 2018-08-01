package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.Datasets;


@Repository(value = "datasetsDao")
public class DatasetsDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public DatasetsDao() {
		log = LogFactory.getLog(DatasetsDao.class);
		entityClass = Datasets.class;
	}
	
	public Datasets findByName(String name) {
		
		String hql = "from Datasets ds where ds.name = :name";
		Datasets  dataset = (Datasets) sessionFactory.getCurrentSession().createQuery(hql).setParameter("name", name).uniqueResult();
		return dataset;
	} 

}
