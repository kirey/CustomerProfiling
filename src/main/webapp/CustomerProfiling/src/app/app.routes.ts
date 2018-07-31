import { DatasetComponent } from './dataset/dataset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

// components
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'datasets', component: DatasetComponent,canActivate:[AuthGuard] },
  { path: '**', component: AppComponent }
];

export const AppRoutes: any = RouterModule.forRoot(routes, { useHash: true });
