import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  constructor(private _http: Http) { }

  baseUrl = 'rest/algorithms/';

  getAlgorithms() {
    return this._http.get(this.baseUrl);
  }
}
