import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmsService } from './algorithms.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddAlgorithmComponent } from '../dialogs/add-algorithm/add-algorithm.component';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'library'];
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
