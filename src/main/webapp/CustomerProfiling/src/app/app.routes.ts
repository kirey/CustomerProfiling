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




const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'datasets', component: DatasetComponent, canActivate: [AuthGuard] },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'data-tab', component: DataTabComponent, canActivate: [AuthGuard] },
  { path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard] },
  { path: '**', component: AppComponent }
];

export const AppRoutes: any = RouterModule.forRoot(routes, { useHash: true });
