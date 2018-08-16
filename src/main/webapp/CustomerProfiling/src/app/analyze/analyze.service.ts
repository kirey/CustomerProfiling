import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  constructor(private _http: Http) { }

  baseUrl = 'rest/algorithms/';

  // Get All Algorithms
  getAlgorithms(projectId) {
    return this._http.get(this.baseUrl + 'filtered/project/' + projectId);
  }

  // Save
  save(projectId, obj) {
    return this._http.post(this.baseUrl + 'save/project/' + projectId, obj);
  }

  // List of Algorithms
  getListOfAlgorithms(projectId) {
    return this._http.get(this.baseUrl + 'project/' + projectId).pipe(map(res => res.json()));
  }

  // Delete Algorithm
  deleteAlgorithm(projectId, algorithmId) {
    return this._http.get(this.baseUrl + 'remove/project/' + projectId + '?algorithmId=' + algorithmId);
  }

  // Save Parameters
  saveParams(obj) {
    return this._http.put(this.baseUrl + 'parameters', obj);
  }

  // Status request
  status(projectId) {
    return this._http.get(this.baseUrl + 'status?projectId=' + projectId).pipe(map(res => res.json()));
  }
}
