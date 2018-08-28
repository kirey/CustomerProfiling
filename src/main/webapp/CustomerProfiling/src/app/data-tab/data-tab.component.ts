import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataTabService } from './data-tab.service';
// Dialog Components
import { DataTabViewComponent } from '../dialogs/data-tab-view/data-tab-view.component';
import { SharedService } from '../shared/services/shared.service';
import { ProjectOverviewService } from '../project-overview/project.overview.service';
import { SnackBarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTabComponent implements OnInit {

  constructor(public dataTabService: DataTabService, public dialog: MatDialog, public sharedService: SharedService, public projectOverviewService: ProjectOverviewService, public snackbar: SnackBarService) { }

  variables: any;
  variablesHelperArr: any;
  variableTypes: any;
  dataTypes: any;
  operationTypes: any;
  message: string;
  numericOperationTypes: any = [];
  textOperationTypes: any = [];
  datasetId: number;
  projectId: number;
  details: any; //Dataset details
  csvArray: any;
  isDatasetLinked: boolean;


  getVariables() {
    this.dataTabService.getVariables(this.datasetId)
      .subscribe(
        res => {
          this.variables = res['data'];
          this.variablesHelperArr = res['data'];
          this.setOperationTypes();
          this.setTypeOfOperation();
          // console.log(this.variables);
        },
        err => {
          console.log(err);
        }
      )
  }

  getVariableTypes() {
    this.dataTabService.getVariableTypes()
      .subscribe(
        res => {
          // console.log(res);
          this.variableTypes = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }

  getDataTypes() {
    this.dataTabService.getDataTypes()
      .subscribe(
        res => {
          // console.log(res);
          this.dataTypes = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }

  getDatasetDetails() {
    this.projectOverviewService.getDatasetDetails(this.datasetId).subscribe(
      res => {
        this.details = res.data;
        // console.log(this.details);
      },
      err => {
        console.log(err);
        this.snackbar.openSnackBar('Something went wrong.', 'Error');
      }
    );
  }

  getIsDatasetLinked() {
    this.isDatasetLinked = this.sharedService.getIsDatasetLinked();
  }

  setOperationTypes() {
    this.dataTabService.getOperationTypes('NUMERIC')
      .subscribe(
        res => {
          console.log(res);
          this.numericOperationTypes = res['data'];
          // this.variables[index]['operationTypes'] = res['data'];
        },
        err => {
          console.log(err);
        }
      );

    this.dataTabService.getOperationTypes('TEXT')
      .subscribe(
        res => {
          console.log(res);
          this.textOperationTypes = res['data'];
          // this.variables[index]['operationTypes'] = res['data'];
        },
        err => {
          console.log(err);
        }
      );
  }
  test() {
    return 'Live as it is';
  }
  selectionChanged(ev, index, type) {
    this.variables[index][type] = ev.value;

    if (type == 'typeOfData' && ev.value == 'TEXT') {
      if (this.variables[index]['scaleMin']) this.variables[index]['scaleMin'] = null;
      if (this.variables[index]['scaleMax']) this.variables[index]['scaleMax'] = null;
      if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
      this.variablesHelperArr[index]['typeOfDataChanged'] = true;
    }

    // if (type == 'typeOfData' && this.variables[index]['params']) {
    //   delete this.variables[index]['params'];
    // }
  }

  setTypeOfOperation() {
    console.log("f-ja");
    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].distinct) {
        console.log("1");
        this.variables[i]['typeOfOperation'] = 'Unfolding with distinct categories';
      }
      else if (this.variables[i].leaveAsItIs) {
        console.log("2");
        this.variables[i]['typeOfOperation'] = 'Live as it is';
      }
      else if (this.variables[i].bins != null) {
        console.log("3");
        this.variables[i]['typeOfOperation'] = 'Binning operation';
      }
      else if (this.variables[i].scaleMin != null || this.variables[i].scaleMax != null) {
        console.log("4");
        this.variables[i]['typeOfOperation'] = 'Scaling operation';
      }
    }
  }

  paramsChanged(ev, index, type) {
    this.variables[index][type] = ev.target.value;

    // console.log(this.variables);
  }

  setParams(ev, index) {
    switch (ev.value) {
      case 'Scaling operation':
        this.variablesHelperArr[index]['params'] = { 'minmax': true, 'bins': false };
        if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
        this.variables[index]['distinct'] = false;
        this.variables[index]['leaveAsItIs'] = false;
        break;
      case 'Binning operation':
        this.variablesHelperArr[index]['params'] = { 'minmax': false, 'bins': true };
        if (this.variables[index]['scaleMin']) this.variables[index]['scaleMin'] = null;
        if (this.variables[index]['scaleMax']) this.variables[index]['scaleMax'] = null;
        this.variables[index]['distinct'] = false;
        this.variables[index]['leaveAsItIs'] = false;
        break;
      case 'Unfolding with distinct categories':
        this.variables[index]['distinct'] = true;
        this.variables[index]['leaveAsItIs'] = false;

        if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
        if (this.variables[index]['scaleMin']) this.variables[index]['scaleMin'] = null;
        if (this.variables[index]['scaleMax']) this.variables[index]['scaleMax'] = null;
        break;
      case 'Live as it is':
        this.variables[index]['leaveAsItIs'] = true;
        this.variables[index]['distinct'] = false;
        if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
        if (this.variables[index]['scaleMin']) this.variables[index]['scaleMin'] = null;
        if (this.variables[index]['scaleMax']) this.variables[index]['scaleMax'] = null;
        break;
    }
  }

  viewObject() {
    let checkArray = [];

    console.log(this.variables);

    // Check for empty fields
    for (let i = 0; i < this.variables.length; i++) {
      if (!this.variables[i]['typeOfVariable']) {
        this.message = 'Select variable type.';
        break;
      }
      else if (!this.variables[i]['typeOfData']) {
        this.message = 'Select data type.';
        break;
      }
      else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
        this.message = 'Select parameters.';
        break;
      }
      else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
        this.message = 'Select parameters.';
        break;
      }
      else {
        checkArray.push(true);
      }
    }
    // Send request after check
    if (checkArray.length == this.variables.length) {

      for (let i = 0; i < this.variables.length; i++) {
        // delete this.variables[i]['params'];
        delete this.variables[i]['operationTypes'];
      }

      this.dataTabService.getProcessingView(this.datasetId, this.variables)
        .subscribe(
          res => {
            // console.log(res['data']);
            this.csvArray = res['data'];
            let dialogRef = this.dialog.open(DataTabViewComponent, {
              data: this.csvArray
            })
            dialogRef.afterClosed().subscribe(res => {
              // console.log(this.variables);
            });
          },
          err => {
            console.log(err);
          }
        );
      // console.log(this.variables);
      // this.message = '';
      // const dialogRef = this.dialog.open(DataTabViewComponent, {
      //   width: '800px',
      //   data: this.variables
      // });
    }

  }

  submit() {
    let checkArray = [];
    // console.log(this.variables);

    // Check for empty fields
    for (let i = 0; i < this.variables.length; i++) {
      if (!this.variables[i]['typeOfVariable']) {
        this.message = 'Select variable type.';
        break;
      }
      else if (!this.variables[i]['typeOfData']) {
        this.message = 'Select data type.';
        break;
      }
      else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
        this.message = 'Select parameters.';
        break;
      }
      else if (!this.variables[i]['bins'] && !this.variables[i]['scaleMin'] && !this.variables[i]['scaleMax'] && !this.variables[i]['distinct'] && !this.variables[i]['leaveAsItIs']) {
        this.message = 'Select parameters.';
        break;
      }
      else {
        checkArray.push(true);
      }
    }
    // Send request after check
    if (checkArray.length == this.variables.length) {
      this.message = '';

      let data = this.variables;

      // Variables has params property
      for (let i = 0; i < data.length; i++) {
        // delete data[i]['params'];
        delete data[i]['operationTypes'];
      }
      this, this.dataTabService.save(this.datasetId, this.projectId, data)
        .subscribe(
          res => {
            // console.log(res);
            this.snackbar.openSnackBar(res['message'], 'Success');
            this.isDatasetLinked = true;
            this.sharedService.setDatasetLink(true);
          },
          err => {
            console.log(err);
            this.snackbar.openSnackBar(err['message'], 'Error');
          }
        );
    }
  }

  ngOnInit() {
    this.datasetId = this.sharedService.getDatasetId();
    this.projectId = this.sharedService.getProjectId();

    this.getVariables();
    this.getDataTypes();
    this.getVariableTypes();
    this.getDatasetDetails();
    this.getIsDatasetLinked();
  }
}
