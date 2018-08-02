import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { DataTabService } from './data-tab.service';
// Dialog Components
import { DataTabViewComponent } from '../dialogs/data-tab-view/data-tab-view.component';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTabComponent implements OnInit {

  constructor(public dataTabService: DataTabService, public dialog: MatDialog) { }

  variables: any;
  variableTypes: any;
  dataTypes: any;
  operationTypes: any;
  message: string;
  numericOperationTypes: any = [];
  textOperationTypes: any = [];

  getVariables() {
    this.dataTabService.getVariables()
      .subscribe(
        res => {
          console.log(res);
          this.variables = res['data'];
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

  selectionChanged(ev, index, type) {
    this.variables[index][type] = ev.value;

    if (type == 'typeOfData' && ev.value == 'TEXT') {
      if (this.variables[index]['scaleMin']) this.variables[index]['scaleMin'] = null;
      if (this.variables[index]['scaleMax']) this.variables[index]['scaleMax'] = null;
      if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
    }

    if (type == 'typeOfData' && this.variables[index]['params']) {
      delete this.variables[index]['params'];
    }
    console.log(this.variables);
  }

  paramsChanged(ev, index, type) {
    this.variables[index][type] = ev.target.value;

    // console.log(this.variables);
  }

  setParams(ev, index) {
    switch (ev.value) {
      case 'Scaling operation':
        this.variables[index]['params'] = { 'minmax': true, 'bins': false };
        if (this.variables[index]['bins']) this.variables[index]['bins'] = null;
        this.variables[index]['distinct'] = false;
        this.variables[index]['leaveAsItIs'] = false;
        break;
      case 'Binning operation':
        this.variables[index]['params'] = { 'minmax': false, 'bins': true };
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
    console.log(this.variables);
  }

  viewObject() {
    let checkArray = [];

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
      let obj = this.variables;
      // 
      // Variables has params property
      // 
      for (let i = 0; i < this.variables.length; i++) {
        delete obj[i]['params'];
      }
      console.log(this.variables);
      this.message = '';
      const dialogRef = this.dialog.open(DataTabViewComponent, {
        width: '800px',
        data: obj
      });
    }

  }

  submit() {
    for (let i = 0; i < this.variables.length; i++) {
      delete this.variables[i]['operationTypes'];
      delete this.variables[i]['params'];
    }
    console.log(this.variables);
  }

  ngOnInit() {
    this.getVariables();
    this.getDataTypes();
    this.getVariableTypes();
    this.setOperationTypes();
  }
}
