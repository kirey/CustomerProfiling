import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, PageEvent, MatTableDataSource, MatSort } from '@angular/material';
// dialogs
import { AddComponent } from '../dialogs/addProject/add.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { CopyComponent } from '../dialogs/copyProject/copy.component';

import { SnackBarService } from './../shared/services/snackbar.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  // dataSource: any;
  name: string;
  data: any;
  displayedColumns: string[] = ['id', 'name', 'creationDate', 'lastOpened', 'status', 'description', 'editing'];

  constructor(public projectsService: ProjectsService, public dialog: MatDialog, public snackbar: SnackBarService, private _router: Router, public sharedService: SharedService) { }

  private dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Get Projects
  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        // console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
      }, err => console.log(err),
      () => {
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openProject(id) {
    this.sharedService.setProjectId(id);
    this._router.navigate(['/one-project']);
  }

  // open add dialog
  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getProjects();
    });
  }

  openCopyDialog(obj) {
    const dialogRef = this.dialog.open(CopyComponent, {
      width: '800px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getProjects();
    }
    );
  }


  // open delete dialog
  openDeleteDialog(item) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { name: item.projectName, type: 'project' }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.projectsService.deleteProject(item.id).subscribe(
          res => {
            this.snackbar.openSnackBar(res['message'], 'Success');
            this.getProjects();
          },
          err => {
            this.snackbar.openSnackBar(err['message'], 'Error');
          }
        );
      }
    });
  }
  ngOnInit() {
    localStorage.removeItem('projectID');
    this.getProjects();
  }
}
