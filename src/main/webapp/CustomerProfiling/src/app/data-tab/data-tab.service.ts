import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class DataTabService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/dataset/';

    getVariables(id) {
        return this._http.get(this.baseUrl + 'preprocessing?datasetId=' + id);
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

    getProcessingView(datasetId, list): Observable<any> {
        for (let i = 0; i < list.length; i++) {
            delete list[i]['params'];
            delete list[i]['operationTypes'];
        }

        return this._http.post(this.baseUrl + 'preprocessing/view?datasetId=' + datasetId, list);
    }
    save(datasetId, projectId, list) {
        return this._http.post(this.baseUrl + 'preprocessing/save?datasetId=' + datasetId + '&projectId=' + projectId, list);
    }
}