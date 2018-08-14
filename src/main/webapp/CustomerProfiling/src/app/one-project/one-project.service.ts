import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class OneProjectService {

    constructor(private _http: HttpClient) { }

    baseUrl = '/CustomerProfiling/rest/';
}