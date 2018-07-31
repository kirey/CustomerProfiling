import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class DataTabService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/dataset/';

    getVariables() {
        return this._http.get(this.baseUrl + 'preprocessing');
    }
}