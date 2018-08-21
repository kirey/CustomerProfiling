import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from '../shared/services/snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private username;
  private password;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _auth: AuthService, private _snackBarService: SnackBarService) {
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
      },
      err => {
        this._snackBarService.openSnackBar('Error', 'Wrong username or password!');
      }, () => {
        localStorage.setItem('username', loginObj.username);
        this._router.navigate(['/dashboard']);
      });
  }

}
