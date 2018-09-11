import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
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

  @Output() disableTabsChange = new EventEmitter<boolean>();

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
  datasetName: string;
  linked: boolean;
  disableSelect: boolean;

  constructor(public projectOverviewService: ProjectOverviewService, public snackbar: SnackBarService, public sharedService: SharedService) { }

  getListOfAlgorithms() {
    this.projectOverviewService.getListOfAlgorithms(this.projectId).subscribe(
      res => {
        this.algorithms = res.data;
        // console.log(res);
      },
      err => console.log(err)
    );
  }

  getDataset() {
    this.projectOverviewService.getDataset().subscribe(
      res => {
        this.dataset = res.data;
        this.isLinked();
      },
      err => console.log(err)
    );
  }

  isLinked() {
    this.projectOverviewService.isLinked(this.projectId)
      .subscribe(
        res => {
          // console.log(res);
          if (res['data']['true'] && this.dataset) {
            // console.log('true');
            this.datasetId = res['data']['true'];

            for (let i = 0; i < this.dataset.length; i++) {
              if (this.dataset[i].id == this.datasetId) {
                this.datasetName = this.dataset[i].name;
                this.selectedDatasetId = this.dataset[i].id;
                this.getDatasetDetails(this.selectedDatasetId);

                // Link Dataset to SHARED service
                this.sharedService.setDatasetName(this.datasetName);
                this.sharedService.setDatasetId(this.datasetId);
                this.sharedService.setDatasetLink(true);

                this.linked = true;
                this.disableSelect = true;
                // Enable Tabs
                this.disableTabsChange.emit(false);
              }
            }
          }
          else if (res['data']['false'] == null) {
            // Link Dataset to SHARED service
            this.sharedService.setDatasetName(null);
            this.sharedService.setDatasetId(null);
            this.sharedService.setDatasetLink(false);
            this.linked = true;
            this.disableSelect = false;
            // console.log('false');
          }
          else {
            // console.log('false with id');
            for (let i = 0; i < this.dataset.length; i++) {
              if (this.dataset[i].id == res['data']['false']) {
                console.log("found it!");
                this.datasetName = this.dataset[i].name;
                this.selectedDatasetId = this.dataset[i].id;
                this.linked = true;
                // Enable Tabs
                this.disableTabsChange.emit(false);
                this.getDatasetDetails(this.selectedDatasetId);
              }
            }
            this.disableSelect = false;
          }
        },
        err => console.log(err)
      );
  }

  editProject(obj) {
    this.projectOverviewService.editProject(obj)
      .subscribe(
        res => {
          // console.log(res);
          this.snackbar.openSnackBar(res['message'], 'Success');
        },
        err => {
          console.log(err);
          this.snackbar.openSnackBar(err['message'], 'Error');
        }
      );
  }

  selectedDataset(ev) {
    if (ev.value) {
      for (let i = 0; i < this.dataset.length; i++) {
        if (this.dataset[i].name == ev.value) {
          this.selectedDatasetId = this.dataset[i].id;
          this.datasetName = this.dataset[i].name;
        }
      }
      this.projectOverviewService.linkDatasetProject(this.projectId, this.selectedDatasetId)
        .subscribe(
          res => console.log(res),
          err => console.log
        );

      this.details = {};
      this.showDetails = false;
      // this.selectedDatasetId = ev.value.id;
      this.getDatasetDetails(this.selectedDatasetId);
    }
    else {
      // Disable Tabs
      this.disableTabsChange.emit(true);

      // Link dataset
      this.sharedService.setDatasetId(null);
      this.sharedService.setDatasetName(null);
    }
  }

  getDatasetDetails(id) {
    this.projectOverviewService.getDatasetDetails(id).subscribe(
      res => {
        this.showDetails = true;
        this.details = res.data;
        // console.log(this.details);

        // Enable Tabs
        this.disableTabsChange.emit(false);

        // Link dataset
        this.sharedService.setDatasetId(this.selectedDatasetId);
        this.sharedService.setDatasetName(this.datasetName);
      },
      err => {
        console.log(err);
        this.snackbar.openSnackBar(err['message'], 'Error');
      }
    );
  }

  ngOnInit() {
    // console.log("init");
    this.linked = false;
    this.projectId = this.sharedService.getProjectId();
    this.datasetName = this.sharedService.getDatasetName();

    this.projectOverviewService.getProject(this.projectId).subscribe(res => {
      this.project = res.data.project;
      // console.log(this.project);
    });
    this.getListOfAlgorithms();
    this.getDataset();
  }

}
