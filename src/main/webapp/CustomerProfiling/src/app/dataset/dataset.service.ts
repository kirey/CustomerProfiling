import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private _http: Http) { }

  baseUrl = 'rest/dataset/';

  getDatasets() {
    return this._http.get(this.baseUrl);
  }

  addDataset(formData: FormData) {
    return this._http.post(this.baseUrl + 'addNewDataset', formData);
  }

  getDataset(id) {
    return this._http.get(this.baseUrl + id);
  }

  deleteDataset(id) {
    return this._http.delete(this.baseUrl + id);


  }
}