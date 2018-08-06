import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmsService } from './algorithms.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddAlgorithmComponent } from '../dialogs/add-algorithm/add-algorithm.component';
import { ViewAlgorithmComponent } from '../dialogs/view-algorithm/view-algorithm.component';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'library', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(public service: AlgorithmsService, public dialog: MatDialog) { }

  data: any;

  getAll() {
    this.service.getAll()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res['data']);
        },
        err => {
          console.log(err)
        }
      );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddAlgorithmComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(results => {
      this.getAll();
    });
  }

  openViewDialog(id) {
    const dialogRef = this.dialog.open(ViewAlgorithmComponent, {
      width: '800px',
      data: id
    });
    // dialogRef.afterClosed().subscribe(results => {
    //   this.getAll();
    // });
  }

  ngOnInit() {
    this.getAll();
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  // if (this.dataSource.paginator) {
  //   this.dataSource.paginator.firstPage();
  // }
  // }

}