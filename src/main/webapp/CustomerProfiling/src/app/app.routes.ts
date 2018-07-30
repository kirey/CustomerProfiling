import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '**', component: AppComponent }
];

export const AppRoutes: any = RouterModule.forRoot(routes, { useHash: true });
