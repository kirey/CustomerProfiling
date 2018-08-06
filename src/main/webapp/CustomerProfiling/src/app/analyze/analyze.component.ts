import { element } from 'protractor';
import { MatDialog } from '@angular/material';
import { AddValueComponent } from './../dialogs/add-value/add-value.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalyzeService } from './analyze.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

  constructor(private _analyzeService: AnalyzeService, private _formBuilder: FormBuilder, private _dialog: MatDialog) { }

  private algorithms;
  private initialAlgorithm;
  private parameters = [];
  private displayedColumns: string[] = ['parameterName', 'parameterValueType', 'parameterDefaultValue','parameterValue', 'actions'];
  private selectedAlgorithms = [];

  ngOnInit() {
    this._analyzeService.getAlgorithms().subscribe(res => {
      this.algorithms = JSON.parse(res.text()).data;
    }, err => {
    }, () => {
      this.initialAlgorithm = this.algorithms[0];
      console.log(this.initialAlgorithm);
      this.getParameters(this.initialAlgorithm);
    });
  }
  getParameters(algorithm) {
    console.log(this.parameters);
    this.parameters = [];
    algorithm.parameters.forEach(element => {
      this.parameters.push(element);
      console.log(element);
      // console.log(element.parameterValues[0]);
    });
    console.log(this.parameters);
  }
  addValue(element) {
    const dialogRef = this._dialog.open(AddValueComponent, {
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(result => {
      //here we take value from dialog back to component and need to put it back in array changed and to delete old one
      for (let i = 0; i < this.parameters.length; i++) {
        if (element == this.parameters[i]) {
          const newParameter = {
            defaultValue: element.defaultValue,
            id: element.id,
            parameterName:element.parameterName,
            parameterValueType: element.parameterValueType,
            parameterValues: [
              {
                value: result
              }
            ]
          }
          console.log(newParameter);
          delete this.parameters[i];
          this.parameters.push(newParameter);
        }

      }
      //to remove undefined element that is deleted previously
      this.parameters = this.parameters.filter(function( element ) {
        return element !== undefined;
     });
    });
  }
  addAlgorithm() {

  }

}
