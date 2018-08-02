package com.kirey.customerprofiling.data.dao;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.kirey.customerprofiling.data.entity.Datasets;
import com.kirey.customerprofiling.data.entity.Variables;
import com.kirey.customerprofiling.data.entity.Projects;


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
	
	public List<Datasets> findAllOriginal() {
		
		String hql = "from Datasets ds where ds.originalDataset is null";
		List<Datasets>  dataset = (List<Datasets>) sessionFactory.getCurrentSession().createQuery(hql).list();
		return dataset;
	}

	/**
	 * Method for getting {@link Datasets} from {@link Variables}
	 * @param variable
	 * @return {@link Datasets}
	 */
	public Datasets findByVariable(Variables variable) {
		Hibernate.initialize(variable.getDataset());
		return variable.getDataset();
		
    }

	/**
	 * Method for checking if exists derived dataset for selected project
	 * @param projectId
	 * @param datasetId
	 * @return
	 */
	public boolean isDatasetLinkedToProject(Integer projectId) {
		String hql = "from Datasets ds where ds.originalDataset is not null and ds.project.id = :projectId";
		List<Datasets>  datasetsList = (List<Datasets>) sessionFactory.getCurrentSession().createQuery(hql)
				.setParameter("projectId", projectId)
				.list();
		
		if(datasetsList.isEmpty())
			return false;
		else return true;

	} 

}
