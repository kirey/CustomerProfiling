import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class Dashboardervice {
  constructor(private _http: HttpClient) {}

  baseUrl = '/CustomerProfiling/rest/';

  getProjects() {
    return this._http.get(this.baseUrl + 'projects');
  }

  getDatasets() {
    return this._http.get(this.baseUrl + 'dataset');
  }

  getAlgorithms() {
    return this._http.get(this.baseUrl + 'algorithms');
  }

  getProjectsDetails(id) {
    return this._http.get(this.baseUrl + 'projects/' + id);
}
getDatasetDetails(id) {
  return this._http.get(this.baseUrl + 'dataset/' + id);
}

getAlgorithmDetails(id) {
  return this._http.get(this.baseUrl + 'algorithms/' + id);
}
  // getDataTypes() {
  //     return this._http.get(this.baseUrl + 'dataTypes');
  // }

  // getVariableTypes() {
  //     return this._http.get(this.baseUrl + 'columnTypes');
  // }

  // getOperationTypes(type) {
  //     return this._http.get(this.baseUrl + 'operationTypes?dataType=' + type);
  // }
}
