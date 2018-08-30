import { Component, ViewEncapsulation, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'CustomerProfiling';
  private user;
  username: String = localStorage.getItem('username');

  constructor(private _auth: AuthService, private _router: Router) {
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
