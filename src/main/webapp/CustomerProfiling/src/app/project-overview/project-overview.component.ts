import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectOverviewService } from './project.overview.service';
import { SnackBarService } from '../shared/services/snackbar.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectOverviewComponent implements OnInit {
  selected = 'option2';
  id: number;
  dataset: any;
  details: any;
  showDetails: boolean = false;
  project: any;
  algorithms: any;
  datasetId: number;
  projectId: number;
  selectedDatasetId: number;
  linkDatasetBool: boolean = false;

  constructor(public projectOverviewService: ProjectOverviewService, public snackbar: SnackBarService, public sharedService: SharedService) { }

  getAlorithmsProject() {
    this.projectOverviewService.getAlgorithms(this.projectId).subscribe(
      res => {
        this.algorithms = res.data;
        console.log(this.algorithms);
      },
      err => console.log(err)
    );
  }

  getDataset() {
    this.projectOverviewService.getDataset().subscribe(
      res => {
        this.dataset = res.data;
      },
      err => console.log(err)
    );
  }

  editProject(obj) {
    this.projectOverviewService.editProject(obj)
      .subscribe(
        res => {
          // console.log(res);
          this.snackbar.openSnackBar(res['data'], 'Success');
        },
        err => {
          console.log(err);
          this.snackbar.openSnackBar('Something went wrong.', 'Error');
        }
      );
  }

  selectedDataset(ev) {
    this.details = {};
    this.showDetails = false;
    this.selectedDatasetId = ev.value.id;

    this.projectOverviewService.getDatasetDetails(this.selectedDatasetId).subscribe(
      res => {
        this.showDetails = true;
        this.details = res.data;
        console.log(this.details);
        this.linkDatasetBool = true;
      },
      err => {
        console.log(err);
        this.linkDatasetBool = false;
        this.snackbar.openSnackBar('Something went wrong.', 'Error');
      }
    );
  }

  linkDataset() {
    this.sharedService.setDatasetId(this.selectedDatasetId);
    this.snackbar.openSnackBar('Dataset linked.', 'Success');
  }


  ngOnInit() {
    this.projectId = this.sharedService.getProjectId();

    this.projectOverviewService.getProject(this.projectId).subscribe(res => {
      this.project = res.data;
    });
    this.getDataset();
    this.getAlorithmsProject();
  }

}
