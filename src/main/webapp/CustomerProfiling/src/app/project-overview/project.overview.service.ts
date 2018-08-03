import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ProjectOverviewService {
  constructor(private _http: HttpClient) {}

  baseUrl = '/CustomerProfiling/rest/';

  getDataset(): Observable<any> {
    return this._http.get(this.baseUrl + 'dataset');
  }
  getDatasetDetails(id): Observable<any> {
    return this._http.get(this.baseUrl + 'dataset/' + id);
  }
  getAlgorithms(id): Observable<any> {
    return this._http.get(
      this.baseUrl + 'algorithms/project/' + id
    );
  }
  getProject(id): Observable<any> {
    return this._http.get(this.baseUrl + 'projects/' + id);
  }
}
