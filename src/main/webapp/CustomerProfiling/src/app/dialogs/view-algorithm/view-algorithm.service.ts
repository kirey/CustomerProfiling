import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ViewAlgorithmService {

    constructor(private _http: Http) { }

    baseUrl = 'rest/algorithms';

    getAlgorithm(id) {
        return this._http.get(this.baseUrl + '/' + id).pipe(map(res => res.json()));
    }
}
