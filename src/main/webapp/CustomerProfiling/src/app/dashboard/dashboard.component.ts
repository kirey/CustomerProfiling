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
  data: any;
  dataset: any;
  algorithm: any;
  selected: any;
  projectsArr: Array<Object>;
  projectDetails: any;
  algo: any;
  panelProject = false;
  panelData = false;
  panelAlgo = false;
  // Columns for variable table
  displayedColumns: string[] = ['Name', 'Average', 'Distinct Count', 'Minimum', 'Maximum'];
  // Columns for algorithms param.table
  displayedColumn: string[] = ['Parameter Name', 'Default Value', 'Value Type', 'Parameter Value'];

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
        this.projectsArr = res['data'];
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
        return '#FF3D00';
      case 'Trained':
        return '#00897B';
      case 'Learning':
        return '#4DB6AC';
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
  // project details click - show details in panel details
  projectClick(id) {
    this.panelProject = true;
    this.panelData = false;
    this.panelAlgo = false;
    console.log('klik');
    this.dashboardService.getProjectsDetails(id).subscribe(
      res => {
        console.log(res);
        this.projectDetails = res['data'];
        console.log(this.projectDetails);
      },
      err => {
        console.log(err);
      }
    );
  }
  // project details dbl click function -  go to overview project page
  projectDblclick(id) {
    console.log('dblklik');
    this.sharedService.setProjectId(id);
    this._router.navigate(['/one-project']);
  }
  // dataset details click - show details in panel details
  datasetClick(id) {
    this.panelData = true;
    this.panelProject = false;
    this.panelAlgo = false;
    this.dashboardService.getDatasetDetails(id).subscribe(
      res => {
        console.log(res);
        this.data = res['data'];
        console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }
  // algorithm details click - show algorithms details in panel details
  algorithmClick(id) {
    console.log('dblklik');
    this.panelAlgo = true;
    this.panelData = false;
    this.panelProject = false;
    this.dashboardService.getAlgorithmDetails(id).subscribe(
      res => {
        console.log(res);
        this.algo = res['data'];
        console.log(this.algo);
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
