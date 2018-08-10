
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class CopyProjectService {
  constructor(private _http: HttpClient) { }

  baseUrl = '/CustomerProfiling/rest/projects/';

  copyProjects(obj): Observable<any> {
    return this._http.post(this.baseUrl + 'copy', obj);
  }
}
