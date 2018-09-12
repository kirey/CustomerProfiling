import { AnalyzeService } from './analyze/analyze.service';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { MaterialModule } from './shared/modules/material.module';

// Services
import { ProjectsService } from './projects/projects.service';
import { AlgorithmsService } from './algorithms/algorithms.service';
import { ProjectOverviewService } from './project-overview/project.overview.service';
import { SharedService } from './shared/services/shared.service';
import { EditAlgorithmService } from './dialogs/edit-algorithm/edit-algorithm.service';
import { Dashboardervice } from './dashboard/dashboard.service';

// Components
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './dialogs/addProject/add.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { CopyComponent } from './dialogs/copyProject/copy.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DataTabComponent } from './data-tab/data-tab.component';
import { DataTabService } from './data-tab/data-tab.service';
import { EditAlgorithmComponent } from './dialogs/edit-algorithm/edit-algorithm.component';
import { QueryComponent } from './query/query.component';
import { NewQueryComponent } from './new-query/new-query.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryResultDetailsComponent } from './query-result-details/query-result-details.component';

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
import { OneProjectComponent } from './one-project/one-project.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { AddValueComponent } from './dialogs/add-value/add-value.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { POGuard } from './shared/guards/project-ovierview.guard';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { SignUpService } from './shared/services/sign-up.service';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
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
    ViewAlgorithmComponent,
    OneProjectComponent,
    AnalyzeComponent,
    AddValueComponent,
    EditAlgorithmComponent,
    QueryComponent,
    NewQueryComponent,
    QueryResultComponent,
    QueryResultDetailsComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
    POGuard,
    ProjectsService,
    DataTabService,
    AlgorithmsService,
    AddProjectService,
    CopyProjectService,
    ProjectOverviewService,
    AnalyzeService,
    SharedService,
    EditAlgorithmService,
    Dashboardervice,
    SignUpService
  ],
  entryComponents: [
    AddComponent,
    DeleteComponent,
    CopyComponent,
    AddDatasetComponent,
    DatasetDetailComponent,
    DataTabViewComponent,
    CopyComponent,
    AddAlgorithmComponent,
    ViewAlgorithmComponent,
    AddValueComponent,
    EditAlgorithmComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
