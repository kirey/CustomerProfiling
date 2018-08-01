import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// dialogs
import { AddComponent } from '../dialogs/addProject/add.component';
import { EditProjectComponent } from '../dialogs/edit-project/edit-project.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { CopyComponent } from '../dialogs/copyProject/copy.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  dataSource: any;
  name: string;
  data: any;
  displayedColumns: string[] = [ 'id', 'name', 'creationDate', 'lastOpened', 'status', 'description', 'editing'];
  projects: any;

  constructor(public projectsService: ProjectsService, public dialog: MatDialog) { }

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

  // open add dialog
  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '800px',
      // data: this.data
    });
    // console.log(obj);

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getList();
    //   console.log(res);
    //   console.log('uspesno');
    // });
  }

  // open edit dialog
  openEditDialog(obj) {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '800px',
      data: obj
    });
    console.log(obj);

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getList();
    //   console.log(res);
    //   console.log('uspesno');
    // });
  }


   // open delete dialog
   openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      // width: '800px',
      // data: this.data
    });
    // console.log(obj);

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getList();
    //   console.log(res);
    //   console.log('uspesno');
    // });
  }
  openCopyDialog() {
    const dialogRef = this.dialog.open(CopyComponent, {
      width: '800px'
      // data: this.data
    });
    // console.log(obj);

    // dialogRef.afterClosed().subscribe(res => {
    //   this.getList();
    //   console.log(res);
    //   console.log('uspesno');
    // });
  }
  ngOnInit() {
    this.getProjects();
  }

}
