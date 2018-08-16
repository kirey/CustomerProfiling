package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirey.customerprofiling.data.entity.DerivedVariableValue;
import com.kirey.customerprofiling.data.entity.Variables;


@Repository(value = "derivedVariableValuesDao")
public class DerivedVariableValuesDao extends KjcBaseDao {

	@Autowired
	SessionFactory sessionFactory;

	public DerivedVariableValuesDao() {
		log = LogFactory.getLog(DerivedVariableValuesDao.class);
		entityClass = DerivedVariableValue.class;
	}
	
	
	public List<DerivedVariableValue> findByVariable(Variables variable){
		String hql = "from DerivedVariableValue d where d.variable.id = :variableId";
		
		List<DerivedVariableValue> listDerivedVariableValues = sessionFactory.getCurrentSession().createQuery(hql).setParameter("variableId", variable.getId()).list();
		return listDerivedVariableValues;
	}

}
