import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboardervice } from './dashboard.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  projects: any;
  dataset: any;
  algorithm: any;
  selected: any;

  constructor(
    public dashboardService: Dashboardervice,
    private _router: Router,
    public sharedService: SharedService
  ) { }
  // get All projects - first tab
  getAllProjects() {
    this.dashboardService.getProjects().subscribe(
      res => {
        console.log(res);
        this.projects = res['data'];
        console.log(this.projects);
        this.projects = Array.of(this.projects);
      },
      err => {
        console.log(err);
      }
    );
  }
  // colors for status - projects
  getColor(status) {
    switch (status) {
      case 'Not trained':
        return '$primary';
      case 'Trained':
        return '$accent';
      case 'Learning':
        return '$warn';
    }
  }
  // get All Datasets - second tab
  getAllDatasets() {
    this.dashboardService.getDatasets().subscribe(
      res => {
        console.log(res);
        this.dataset = res['data'];
        console.log(this.dataset);
      },
      err => {
        console.log(err);
      }
    );
  }
  // get All Algorithms - third tab
  getAllAlgorithms() {
    this.dashboardService.getAlgorithms().subscribe(
      res => {
        console.log(res);
        this.algorithm = res['data'];
        console.log(this.algorithm);
      },
      err => {
        console.log(err);
      }
    );
  }
  // project details click and dbl click function
  projectClick() {
    console.log('klik');
    // this.sharedService.setProjectId(id);
  }
  projectDblclick(id) {
    console.log('dblklik');
    // this.sharedService.setProjectId(id);
    // this._router.navigate(['/one-project']);
    // this.dashboardService.getProjectsDetails(id).subscribe(
    //   res => {
    //     console.log(res);
    //     // this._router.navigate(['/one-project']);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
  // dataset details click and dbl click
  datasetClick() {
    console.log('click');
  }
  datasetDblclick(id) {
    console.log('dblklik');
    this.dashboardService.getDatasetDetails(id).subscribe(
      res => {
        console.log(res);
        // this._router.navigate(['/one-project']);
      },
      err => {
        console.log(err);
      }
    );
  }
  // algorithm details click and dbl click
  algorithmClick() {
    console.log('click');
  }
  algorithmDblclick(id) {
    console.log('dblklik');
    this.dashboardService.getAlgorithmDetails(id).subscribe(
      res => {
        console.log(res);
        // this._router.navigate(['/one-project']);
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
    this.getAllProjects();
    this.getAllDatasets();
    this.getAllAlgorithms();
  }
}
