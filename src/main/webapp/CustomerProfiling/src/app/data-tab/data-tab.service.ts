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

    getDataTypes() {
        return this._http.get(this.baseUrl + 'dataTypes');
    }

    getVariableTypes() {
        return this._http.get(this.baseUrl + 'columnTypes');
    }

    getOperationTypes(type) {
        return this._http.get(this.baseUrl + 'operationTypes?dataType=' + type);
    }
}