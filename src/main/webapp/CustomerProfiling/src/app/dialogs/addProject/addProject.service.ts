
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AddProjectService {
  constructor(private _http: HttpClient) { }

  baseUrl = '/CustomerProfiling/rest/';


  addProject(project): Observable<any> {
    return this._http.post(this.baseUrl + 'projects', project);
  }
}
