import { DeleteComponent } from './../dialogs/delete/delete.component';
import { DatasetService } from './dataset.service';
import { DatasetDetailComponent } from './../dialogs/dataset-detail/dataset-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDatasetComponent } from '../dialogs/add-dataset/add-dataset.component';
import { SnackBarService } from '../shared/services/snackbar.service';


@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _datasetService: DatasetService, private _snackBarService: SnackBarService) { }

  private datasets;
  private displayedColumns: string[] = ['datasetName', 'actions'];

  ngOnInit() {
    this._datasetService.getDatasets().subscribe(res => {
      this.datasets = JSON.parse(res.text()).data;
    });
  }

  addDataset() {
    const dialogRef = this._dialog.open(AddDatasetComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(results => {
      this._datasetService.getDatasets().subscribe(res => {
        this.datasets = JSON.parse(res.text()).data;
      });
    });
  }
  showDatasetDetail(id) {
    let objToShow;
    this._datasetService.getDataset(id).subscribe(res => {
      objToShow = JSON.parse(res.text()).data;
    }, err => { }, () => {
      const dialogRef = this._dialog.open(DatasetDetailComponent, {
        width: '800px',
        data: objToShow
      });
      dialogRef.afterClosed().subscribe(results => {
      });
    });
  }
  deleteDataset(dataset) {
    const dialogRef = this._dialog.open(DeleteComponent, {
      width: '500px',
      data: { type: "dataset", value: dataset.name }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this._datasetService.deleteDataset(dataset.id).subscribe(res => {
        }, err => {
          this._snackBarService.openSnackBar('Error', 'Something went wrong!');
        }, () => {
          this._snackBarService.openSnackBar('Success', 'You have successfuly deleted dataset!');
          this._datasetService.getDatasets().subscribe(res => {
            this.datasets = JSON.parse(res.text()).data;
          });
        });
      }
    });
  }

}
