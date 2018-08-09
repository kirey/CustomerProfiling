import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, PageEvent, MatTableDataSource } from '@angular/material';
// dialogs
import { AddComponent } from '../dialogs/addProject/add.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { CopyComponent } from '../dialogs/copyProject/copy.component';

import { SnackBarService } from './../shared/services/snackbar.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // dataSource: any;
  name: string;
  data: any;
  displayedColumns: string[] = ['id', 'name', 'creationDate', 'lastOpened', 'status', 'description', 'editing'];
  projects: any;

  constructor(public projectsService: ProjectsService, public dialog: MatDialog, public snackbar: SnackBarService, private _router: Router, public sharedService: SharedService) { }
  private dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  paginator: MatPaginator;
  @ViewChild(MatPaginator)
  set datasourcePaginator(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }
  // Get Projects
  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        console.log(res);
        this.projects = res.data;
        console.log(this.projects);
      },
      err => console.log(err)
    );
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
  openDeleteDialog(id) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res === true) {
        this.projectsService.deleteProject(id).subscribe(
          res => {
            this.snackbar.openSnackBar(res['data'], 'Successful');
            this.getProjects();
          },
          err => {
            this.snackbar.openSnackBar(res['error']['message'], 'Error');
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
