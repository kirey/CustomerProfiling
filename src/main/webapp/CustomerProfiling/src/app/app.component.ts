import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CustomerProfiling';
  private user;

  constructor(private _auth: AuthService, private _router: Router) {
  }

  setUser() {
    this.user = localStorage.getItem("username");
  }

  logout() {
    this._auth.logout()
      .subscribe(
        res => {
          localStorage.removeItem('username');
          this._router.navigate(['/login']);
        },
        err => console.log(err)
      );
  }


}
