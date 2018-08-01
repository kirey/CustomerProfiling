import { Component, OnInit } from '@angular/core';
import { DataTabService } from './data-tab.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss']
})
export class DataTabComponent implements OnInit {

  constructor(public dataTabSrevice: DataTabService, public formBuilder: FormBuilder) { }

  variables: any;
  variableTypes: any;
  dataTypes: any;
  operationTypes: any;
  dataTabForm: any;

  getVariables() {
    this.dataTabSrevice.getVariables()
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
    this.dataTabSrevice.getVariableTypes()
      .subscribe(
        res => {
          console.log(res);
          this.variableTypes = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }

  getDataTypes() {
    this.dataTabSrevice.getDataTypes()
      .subscribe(
        res => {
          console.log(res);
          this.dataTypes = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }

  getOperationTypes() {
    let type;
    this.dataTabSrevice.getOperationTypes(type)
      .subscribe(
        res => {
          console.log(res);
          this.operationTypes = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }
  submit() {
    console.log(this.dataTabForm);
  }

  ngOnInit() {
    this.getVariables();
    this.getDataTypes();
    this.getVariableTypes();

    // Build Form
    this.dataTabForm = this.formBuilder.group({
      variableType: ['', Validators.required],
      dataType: [''],
      operationType: ['']
    });
  }

  // Form Getters
  get variableType() {
    return this.dataTabForm.get('variableType');
  }
  get dataType() {
    return this.dataTabForm.get('dataType');
  }
  get operationType() {
    return this.dataTabForm.get('operationType');
  }
}
