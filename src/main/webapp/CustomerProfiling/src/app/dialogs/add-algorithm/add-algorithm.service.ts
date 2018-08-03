import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddAlgorithmService {

    constructor(private _http: Http) { }

    baseUrl = 'rest/algorithms';

    addAlgorithm(obj) {
        return this._http.post(this.baseUrl, obj);
    }
}
