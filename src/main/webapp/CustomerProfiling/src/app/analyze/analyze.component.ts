import { element } from 'protractor';
import { MatDialog } from '@angular/material';
import { AddValueComponent } from './../dialogs/add-value/add-value.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalyzeService } from './analyze.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { SnackBarService } from '../shared/services/snackbar.service';
import { DeleteComponent } from '../dialogs/delete/delete.component';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

  constructor(private _analyzeService: AnalyzeService, private _formBuilder: FormBuilder, private _dialog: MatDialog, public sharedService: SharedService, public snackbar: SnackBarService) { }

  private algorithms;
  private projectId: number;
  private initialAlgorithm;
  private parameters = [];
  private listOfAlgorithms: any;
  private displayedColumns: string[] = ['parameterName', 'parameterValueType', 'parameterValue', 'actions'];
  private selectedAlgorithms = [];

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

  getAlgorithms() {
    this._analyzeService.getAlgorithms(this.projectId).subscribe(res => {
      this.algorithms = JSON.parse(res.text()).data;
      console.log(this.algorithms);
    },
      err => {
        this.snackbar.openSnackBar('Something went wrong.', 'Error');
      }, () => {
        if (this.algorithms.length > 0) {
          this.initialAlgorithm = this.algorithms[0];
          console.log(this.initialAlgorithm);
          this.getParameters(this.initialAlgorithm);
        }
      });
  }

  getListOfAlgorithms() {
    this._analyzeService.getListOfAlgorithms(this.projectId)
      .subscribe(
        res => {
          console.log(res);
          this.listOfAlgorithms = res['data'];
        },
        err => console.log(err)
      )
  }

  addValue(element, i) {
    const dialogRef = this._dialog.open(AddValueComponent, {
      width: '850px',
      data: { type: 'addValueDialog', value: element.parameterValues[0].value }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.parameters[i].parameterValues[0] = result;
      }
    });
  }

  editParams(params, algorithmIndex) {
    const dialogRef = this._dialog.open(AddValueComponent, {
      width: '850px',
      data: { type: 'editParams', data: params }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listOfAlgorithms[algorithmIndex]['parameters'] = result;

        this._analyzeService.saveParams(this.listOfAlgorithms[algorithmIndex])
          .subscribe(
            res => {
              // console.log(res);
              this.snackbar.openSnackBar('Parameters updated.', 'Success');
            },
            err => {
              console.log(err);
              this.snackbar.openSnackBar('Something went wrong.', 'Error');
            }
          );
      }
    });
  }

  deleteAlgorithm(id, name) {
    const dialogRef = this._dialog.open(DeleteComponent, {
      width: '500px',
      data: { type: "algorithm", value: name }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this._analyzeService.deleteAlgorithm(this.projectId, id)
          .subscribe(
            res => {
              // console.log(res);
              this.getListOfAlgorithms();
              this.snackbar.openSnackBar('Successfully deleted.', 'Success');
            },
            err => {
              console.log(err);
              this.snackbar.openSnackBar('Something went wrong.', 'Error');
            }
          )
      }
    });
  }

  // SAVE button
  addAlgorithm() {
    console.log(this.initialAlgorithm);
    this._analyzeService.save(this.projectId, this.initialAlgorithm)
      .subscribe(
        res => {
          this.getListOfAlgorithms();
          this.getAlgorithms();
          // console.log(res);
          this.snackbar.openSnackBar('Successfully saved.', 'Success');
        },
        err => {
          console.log(err);
          this.snackbar.openSnackBar('Something went wrong.', 'Error');
        }
      )
  }

  getStatus() {
    this._analyzeService.status(this.projectId)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }

  analyze() {
    console.log("änalyze");
  }

  ngOnInit() {
    this.projectId = this.sharedService.getProjectId();
    this.getAlgorithms();
    this.getListOfAlgorithms();
    this.getStatus();
  }
}

