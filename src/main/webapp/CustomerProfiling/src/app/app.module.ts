import { DatasetService } from './dataset/dataset.service';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { MaterialModule } from './shared/modules/material.module';

// Services
import { ProjectsService } from './projects/projects.service';
import { EditProjectsService } from './dialogs/edit-project/edit.project.service';
import { AlgorithmsService } from './algorithms/algorithms.service';
import { ProjectOverviewService } from './project-overview/project.overview.service';

// Components
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './dialogs/addProject/add.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { EditProjectComponent } from './dialogs/edit-project/edit-project.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { CopyComponent } from './dialogs/copyProject/copy.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DataTabComponent } from './data-tab/data-tab.component';
import { DataTabService } from './data-tab/data-tab.service';

// import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { AddDatasetComponent } from './dialogs/add-dataset/add-dataset.component';
import { DatasetDetailComponent } from './dialogs/dataset-detail/dataset-detail.component';
import { DataTabViewComponent } from './dialogs/data-tab-view/data-tab-view.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AddProjectService } from './dialogs/addProject/addProject.service';
import { CopyProjectService } from './dialogs/copyProject/copyProject.service';
import { AddAlgorithmComponent } from './dialogs/add-algorithm/add-algorithm.component';
import { ViewAlgorithmComponent } from './dialogs/view-algorithm/view-algorithm.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    EditProjectComponent,
    DeleteComponent,
    CopyComponent,
    DatasetComponent,
    DataTabComponent,
    ProjectOverviewComponent,
    AddDatasetComponent,
    DatasetDetailComponent,
    DataTabViewComponent,
    AlgorithmsComponent,
    AddAlgorithmComponent,
    ViewAlgorithmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProjectsService,
    EditProjectsService,
    DataTabService,
    AlgorithmsService,
    AddProjectService,
    CopyProjectService,
    ProjectOverviewService
  ],
  entryComponents: [
    AddComponent,
    EditProjectComponent,
    DeleteComponent,
    CopyComponent,
    AddDatasetComponent,
    DatasetDetailComponent,
    DataTabViewComponent,
    CopyComponent,
    AddAlgorithmComponent,
    ViewAlgorithmComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }