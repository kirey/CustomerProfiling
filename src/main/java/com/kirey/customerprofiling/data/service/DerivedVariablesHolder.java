
package com.kirey.customerprofiling.data.service;

import java.util.ArrayList;
import java.util.List;

import com.kirey.customerprofiling.data.entity.Variables;

/**
 * @author paunovicm
 * Holder for derived variables. When variables are saved holder need to be cleared
 */
public class DerivedVariablesHolder {
	
	private static DerivedVariablesHolder holder;
	private List<Variables> listDerivedVariables = null;
	
	public static DerivedVariablesHolder getInstance() {
		if(holder == null) {
			holder = new DerivedVariablesHolder();
		}
		return holder;
	}
	
	private DerivedVariablesHolder() {
		listDerivedVariables = new ArrayList<>();
	}
	
	public List<Variables> getDerivedVariables(){
		return this.listDerivedVariables;
	}
	
	public void addToDerivedVariables(Variables variable) {
		listDerivedVariables.add(variable);
	}
	
	public void removeAll() {
		listDerivedVariables = new ArrayList<>();
	}
	
}
