import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class EditProjectsService {

    constructor(private _http: HttpClient) { }

     baseUrl = '/CustomerProfiling/rest/';


     editProjects(obj): Observable<any> {
      return this._http.put(this.baseUrl + 'projects', obj);
    }
}
