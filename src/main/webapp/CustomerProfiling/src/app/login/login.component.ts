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
  public signupForm: FormGroup;
  loginCard = true;
  signup = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService,
    private _snackBarService: SnackBarService
  ) {
    if (this._auth.isLoggedIn()) {
      this._router.navigate(['/dashboard']);
    }
  }
  openSignup() {
    this.signup = true;
    this.loginCard = false;
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signupSubmit() {
    console.log(this.signupForm.value);
    this.resetForm();
  }
  resetForm() {
    this.signupForm.reset();
  }
  login() {
    const loginObj = {
      username: this.username,
      password: this.password
    };
    this._auth.login(loginObj).subscribe(
      res => {
        localStorage.setItem('username', loginObj.username);
        this._router.navigate(['/dashboard']);
      },
      err => {
        if (localStorage.getItem('username')) {
          localStorage.removeItem('username');
        }
        this._snackBarService.openSnackBar(err['message'], 'Error');
      }
    );
  }
}
