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
    if (this.variables[index]['params']) {
      delete this.variables[index]['params'];
    }
  }

  test() {
    console.log('Test passed');
  }
  test2() {
    console.log('Test2  passed');
  }

  setParams(ev, index) {
    switch (ev.value) {
      case 'Scaling operation':
        this.variables[index]['params'] = { 'minmax': true, 'bin': false };
        break;
      case 'Binning operation':
        this.variables[index]['params'] = { 'minmax': false, 'bin': true };
        break;
      case 'Unfolding with distinct categories':
        this.variables[index]['distinct '] = true;
        break;
      case 'Live as it is':
        this.variables[index]['liveAsItIs'] = true;
        break;
    }
    console.log(this.variables);
  }

  submit() {
  }

  ngOnInit() {
    this.getVariables();
    this.getDataTypes();
    this.getVariableTypes();
  }
}
