import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EditAlgorithmService {

    constructor(private _http: Http) { }

    baseUrl = 'rest/algorithms/editAlgorithm';

    editAlgorithm(obj) {
        return this._http.put(this.baseUrl, obj).pipe(map(res => res.json()));
    }
}
