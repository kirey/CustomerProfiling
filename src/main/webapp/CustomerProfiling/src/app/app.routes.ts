import { OneProjectComponent } from './one-project/one-project.component';
import { DatasetComponent } from './dataset/dataset.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { DataTabComponent } from './data-tab/data-tab.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { POGuard } from './shared/guards/project-ovierview.guard';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'datasets', component: DatasetComponent, canActivate: [AuthGuard] },
  { path: 'one-project', component: OneProjectComponent, canActivate: [POGuard] },
  // { path: 'data-tab', component: DataTabComponent, canActivate: [AuthGuard] },
  { path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];

export const AppRoutes: any = RouterModule.forRoot(routes, { useHash: true });
