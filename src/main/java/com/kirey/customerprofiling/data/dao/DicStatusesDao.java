package com.kirey.customerprofiling.data.dao;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.DicStatuses;

@Repository(value = "dicStatusesDao")
public class DicStatusesDao extends KjcBaseDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	public DicStatusesDao() {
		log = LogFactory.getLog(DicStatusesDao.class);
		entityClass = DicStatuses.class;
	}

	/**
	 * Method for getting {@link DicStatuses} by given status
	 * @param status
	 * @return {@link DicStatuses}
	 */
	public DicStatuses findByStatus(String status) {
		String hql = "from DicStatuses stat where stat.status = :status";
		DicStatuses dicStatus = (DicStatuses) sessionFactory.getCurrentSession().createQuery(hql).setParameter("status", status).uniqueResult();
		return dicStatus;
	}
}
