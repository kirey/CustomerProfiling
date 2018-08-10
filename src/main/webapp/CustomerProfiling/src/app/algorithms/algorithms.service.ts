import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlgorithmsService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/algorithms';

    getAll() {
        return this._http.get(this.baseUrl);
    }

    geAlgorithm(id) {
        return this._http.get(this.baseUrl + '/' + id);
    }
}