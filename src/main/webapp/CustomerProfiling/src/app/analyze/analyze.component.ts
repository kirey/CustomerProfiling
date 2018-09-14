import { element } from 'protractor';
import { MatDialog } from '@angular/material';
import { AddValueComponent } from './../dialogs/add-value/add-value.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalyzeService } from './analyze.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { SnackBarService } from '../shared/services/snackbar.service';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { interval, UnsubscriptionError, Subscription } from 'rxjs';


@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyzeComponent implements OnInit {

  constructor(private _analyzeService: AnalyzeService, private _formBuilder: FormBuilder, private _dialog: MatDialog, public sharedService: SharedService, public snackbar: SnackBarService) { }

  private algorithms;
  private projectId: number;
  private initialAlgorithm;
  private parameters = [];
  private listOfAlgorithms: any = [];
  private displayedColumns: string[] = ['parameterName', 'parameterValueType', 'parameterValue', 'actions'];
  private selectedAlgorithms = [];
  private statusList: String;
  private refreshInterval$ = interval(5000);
  subscription: Subscription;

  getParameters(algorithm) {
    // console.log(this.parameters);
    this.parameters = [];
    algorithm.parameters.forEach(element => {
      this.parameters.push(element);
      // console.log(element);
      // console.log(element.parameterValues[0]);
    });
    // console.log(this.parameters);
  }

  getAlgorithms() {
    this._analyzeService.getAlgorithms(this.projectId).subscribe(res => {
      this.algorithms = JSON.parse(res.text()).data;
      // console.log(this.algorithms);
    },
      err => {
        this.snackbar.openSnackBar('Something went wrong.', 'Error');
      }, () => {
        if (this.algorithms.length > 0) {
          this.initialAlgorithm = this.algorithms[0];
          // console.log(this.initialAlgorithm);
          this.getParameters(this.initialAlgorithm);
        }
      });
  }

  getListOfAlgorithms() {
    this._analyzeService.getListOfAlgorithms(this.projectId)
      .subscribe(
        res => {
          // console.log(res);
          this.listOfAlgorithms = res['data'];
          this.getStatus();
        },
        err => console.log(err)
      )
  }
  getColor(status) {
    switch (status) {
      case 'Training':
        return '#4DB6AC';
      case 'Trained':
        return '#00897B';
      case 'Error':
        return '#B71C1C';
      case 'Notified Error':
        return '#FF3D00';
      case 'Notified Completion':
        return '#004D40';
      default:
        return '#424242';
    }
  }

  findAlgorithm(algorithmName, typeOfAction) {
    let selectedAlgorithm;

    for (let i = 0; i < this.listOfAlgorithms.length; i++) {
      if (this.listOfAlgorithms[i].algorithmName == algorithmName) {
        selectedAlgorithm = this.listOfAlgorithms[i];
      }
    }
    switch (typeOfAction) {
      case 'edit':
        // console.log(selectedAlgorithm);
        this.editParams(selectedAlgorithm.parameters, selectedAlgorithm);
        break;
      case 'delete':
        this.deleteAlgorithm(selectedAlgorithm.id, selectedAlgorithm.algorithmName);
        break;
    }
  }

  setAlgorithmStatus() {
    // console.log("u func. wtf");
    // if (this.listOfAlgorithms && this.statusList && this.listOfAlgorithms.length > 0 && this.statusList.length > 0) {
    //   for (let i = 0; i < this.listOfAlgorithms.length; i++) {
    //     for (let y = 0; y < this.statusList.length; y++) {
    //       if (this.listOfAlgorithms[i] == this.statusList[y]) {
    //         console.log(this.statusList[y]);
    //       }
    //     }
    //   }
    // }
  }

  addValue(element, i) {
    const dialogRef = this._dialog.open(AddValueComponent, {
      data: { type: 'addValueDialog', value: element.parameterValues[0].value }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result);
        this.parameters[i].parameterValues[0] = result;
      }
    });
  }

  editParams(params, algorithm) {
    let paramsOld = params;
    const dialogRef = this._dialog.open(AddValueComponent, {
      data: { type: 'editParams', data: params, title: algorithm.algorithmName }
    });
    // console.log(algorithm.algorithmName);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < this.listOfAlgorithms.length; i++) {
          // console.log(this.listOfAlgorithms[i]);
          // console.log(algorithm);
          if (this.listOfAlgorithms[i].id == algorithm.id) {
            this.listOfAlgorithms[i]['parameters'] = result;
            // console.log("nesto");
            this._analyzeService.saveParams(this.listOfAlgorithms[i])
              .subscribe(
                res => {
                  // console.log(res);
                  this.snackbar.openSnackBar(JSON.parse(res.text()).message, 'Success');
                },
                err => {
                  console.log(err);
                  this.snackbar.openSnackBar(JSON.parse(err.text()).message, 'Error');
                }
              );
          }
        }
      }
      else {
        for (let i = 0; i < this.algorithms.length; i++) {
          if (this.algorithms[i].id == algorithm.id) {
            this.algorithms[i]['parameters'] = paramsOld;
            this.listOfAlgorithms[i]['parameters'] = paramsOld;
          }
        }
      }
    });
  }

  deleteAlgorithm(id, name) {
    const dialogRef = this._dialog.open(DeleteComponent, {
      width: '500px',
      data: { type: "algorithm", name: name }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this._analyzeService.deleteAlgorithm(this.projectId, id)
          .subscribe(
            res => {
              // console.log(res);
              this.getListOfAlgorithms();
              this.snackbar.openSnackBar(JSON.parse(res.text()).message, 'Success');
            },
            err => {
              console.log(err);
              this.snackbar.openSnackBar(JSON.parse(err.text()).message, 'Error');
            }
          )
      }
    });
  }

  // SAVE button
  addAlgorithm() {
    // console.log(this.initialAlgorithm);
    this._analyzeService.save(this.projectId, this.initialAlgorithm)
      .subscribe(
        res => {
          this.getListOfAlgorithms();
          this.getAlgorithms();
          this.getStatus();
          // console.log(res);
          this.snackbar.openSnackBar(JSON.parse(res.text()).message, 'Success');
        },
        err => {
          console.log(err);
          this.snackbar.openSnackBar(JSON.parse(err.text()).message, 'Error');
        }
      )
  }

  getStatus() {
    this._analyzeService.status(this.projectId)
      .subscribe(
        res => {
          // console.log(res);
          this.statusList = res['data'];
          this.setAlgorithmStatus();
        },
        err => console.log(err)
      );
  }

  analyze() {
    console.log("Analyze");
    // this._analyzeService.analyze(this.projectId, this.listOfAlgorithms)
    //   .subscribe(
    //     res => {
    //       // console.log(res)
    //       this.snackbar.openSnackBar(res['message'], 'Success');
    //     },
    //     err => {
    //       console.log(err);
    //       this.snackbar.openSnackBar(err['message'], 'Error');
    //     }
    //   );
  }

  ngOnInit() {
    this.projectId = this.sharedService.getProjectId();
    this.getAlgorithms();
    this.getListOfAlgorithms();
    this.getStatus();

    // Get Status every 5 seconds
    this.subscription = this.refreshInterval$.subscribe(() =>
      this.getStatus()
    );
  }

  ngOnDestroy() {
    // Stop getting Status every 5 seconds
    this.subscription.unsubscribe();
  }
}

