import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class OneProjectService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/';

    // Check whether DATASET is linked to project
    isLinked(projectId) {
        return this._http.get(this.baseUrl + 'dataset/linkDataset?projectId=' + projectId);
    }
}