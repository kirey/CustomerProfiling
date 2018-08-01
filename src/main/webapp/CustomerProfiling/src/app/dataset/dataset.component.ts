import { DatasetDetailComponent } from './../dialogs/dataset-detail/dataset-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDatasetComponent } from '../dialogs/add-dataset/add-dataset.component';


@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  private datasets = [{ name: "jedan" }, { name: "dva" }, { name: "tri" }, { name: "cetiri" }];
  private displayedColumns: string[] = ['datasetName', 'deleting'];

  ngOnInit() {
  }

  addDataset() {
    const dialogRef = this._dialog.open(AddDatasetComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(results => {
      console.log("closed!")
    });
  }
  showDatasetDetail(){
    const dialogRef = this._dialog.open(DatasetDetailComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(results => {
      console.log("closed!")
    });
  }

}
