import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddComponent } from '../dialogs/addProject/add.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  dataSource: any;
  name: string;
  displayedColumns: string[] = [ 'name', 'editing'];

  constructor(publicprojectsService: ProjectsService, public dialog: MatDialog) { }


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
  ngOnInit() {
  }

}
