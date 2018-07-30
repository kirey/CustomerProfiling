import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// components
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '**', component: AppComponent }
];

export const AppRoutes: any = RouterModule.forRoot(routes, { useHash: true });
