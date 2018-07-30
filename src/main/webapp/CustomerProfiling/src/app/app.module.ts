import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { MaterialModule } from './shared/modules/material.module';
// components
import { ProjectsComponent } from './projects/projects.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard],
  entryComponents: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
