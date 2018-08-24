import { DeleteComponent } from './../dialogs/delete/delete.component';
import { DatasetService } from './dataset.service';
import { DatasetDetailComponent } from './../dialogs/dataset-detail/dataset-detail.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, PageEvent, MatTableDataSource } from '@angular/material';
import { AddDatasetComponent } from '../dialogs/add-dataset/add-dataset.component';
import { SnackBarService } from '../shared/services/snackbar.service';


@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class DatasetComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _datasetService: DatasetService, private _snackBarService: SnackBarService) { }

  private displayedColumns: string[] = ['datasetName', 'actions'];
  private dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this._datasetService.getDatasets().subscribe(res => {
      this.dataSource = new MatTableDataSource(JSON.parse(res.text()).data);
      // console.log(this.dataSource);
    }, err => { }, () => {
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource.paginator);
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        return data.name.toLowerCase().includes(filter);
      };
    });
  }

  addDataset() {
    const dialogRef = this._dialog.open(AddDatasetComponent, {
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(results => {
      this._datasetService.getDatasets().subscribe(res => {
        this.dataSource = new MatTableDataSource(JSON.parse(res.text()).data);
      });
    });
  }
  showDatasetDetail(id) {
    let objToShow;
    this._datasetService.getDataset(id).subscribe(res => {
      objToShow = JSON.parse(res.text()).data;
    }, err => { }, () => {
      const dialogRef = this._dialog.open(DatasetDetailComponent, {
        data: objToShow
      });
      dialogRef.afterClosed().subscribe(results => {
      });
    });
  }
  deleteDataset(dataset) {
    const dialogRef = this._dialog.open(DeleteComponent, {
      data: { name: dataset.name, type: 'dataset' }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._datasetService.deleteDataset(dataset.id)
          .subscribe(
            res => {
              // console.log(res);
              this._snackBarService.openSnackBar(JSON.parse(res.text()).message, 'Success');
              this._datasetService.getDatasets().subscribe(
                res => {
                  this.dataSource = new MatTableDataSource(JSON.parse(res.text()).data);
                });
            },
            err => {
              console.log(err);
              this._snackBarService.openSnackBar(JSON.parse(err.text()).message, 'Error');
            });
      }
    });
  }

}
