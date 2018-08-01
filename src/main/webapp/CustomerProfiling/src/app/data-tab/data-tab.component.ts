import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataTabService } from './data-tab.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTabComponent implements OnInit {

  constructor(public dataTabService: DataTabService, public formBuilder: FormBuilder) { }

  variables: any;
  variableTypes: any;
  dataTypes: any;
  operationTypes: any;

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

  selectionChanged(ev, index, type) {
    this.variables[index][type] = ev.value;

    switch (type) {
      case 'typeOfData':
        this.dataTabService.getOperationTypes(ev.value)
          .subscribe(
            res => {
              console.log(res);
              this.variables[index]['operationTypes'] = res['data'];
            },
            err => {
              console.log(err);
            }
          );
        break;
    }

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

  }

  submit() {
  }

  ngOnInit() {
    this.getVariables();
    this.getDataTypes();
    this.getVariableTypes();
  }
}
