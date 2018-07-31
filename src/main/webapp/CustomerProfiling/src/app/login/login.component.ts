import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private username;
  private password;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _auth: AuthService) {
    if (this._auth.isLoggedIn()) {
      this._router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const loginObj = {
      username: this.username,
      password: this.password
    };
    this._auth.login(loginObj).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }, () => {
        localStorage.setItem('username', loginObj.username);
        this._router.navigate(['/dashboard']);
      });
  }

}
