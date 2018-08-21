import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AlgorithmsService } from './algorithms.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AddAlgorithmComponent } from '../dialogs/add-algorithm/add-algorithm.component';
import { ViewAlgorithmComponent } from '../dialogs/view-algorithm/view-algorithm.component';
import { EditAlgorithmComponent } from '../dialogs/edit-algorithm/edit-algorithm.component';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class AlgorithmsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'library', 'actions'];

  private dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public service: AlgorithmsService, public dialog: MatDialog) { }

  data: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.service.getAll()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res['data']);
        },
        err => {
          console.log(err)
        }, () => {
          this.dataSource.paginator = this.paginator;
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

  openViewDialog(obj) {
    const dialogRef = this.dialog.open(ViewAlgorithmComponent, {
      width: '800px',
      data: obj
    });
    // dialogRef.afterClosed().subscribe(results => {
    //   this.getAll();
    // });
  }
  openEditDialog(obj) {
    const dialogRef = this.dialog.open(EditAlgorithmComponent, {
      width: '800px',
      data: obj
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
