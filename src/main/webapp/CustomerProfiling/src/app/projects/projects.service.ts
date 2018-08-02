import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {

    constructor(private _http: HttpClient) { }

     baseUrl = '/CustomerProfiling/rest/';

    getProjects(): Observable<any> {
        return this._http.get(this.baseUrl + 'projects');
    }



}
