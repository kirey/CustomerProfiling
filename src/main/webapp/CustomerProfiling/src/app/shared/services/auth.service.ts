import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: Http, private _router: Router) { }

  public login(data) {
    return this._http.post('authentication', data);
  }

  public logout() {
    return this._http.post('logout', {});
  }
  isLoggedIn() {
    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      return false;
    }
  }
}
