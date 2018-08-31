import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/user';


    signup(obj) {
        return this._http.post(this.baseUrl, obj);
    }

}