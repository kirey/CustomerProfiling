import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditProjectsService } from './edit.project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProjectComponent implements OnInit {
// data: any;
projects: any;
  constructor(public editProjectService: EditProjectsService, public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

    editJob(obj) {
      this.editProjectService.editProjects(obj).subscribe(
        res => {
          console.log(res);
          // this.snackbar.openSnackBar(res['data'], 'Success');
          // this.dialogRef.close();
        },
        err => {
          console.log(err);
          // this.snackbar.openSnackBar('Something went wrong.', 'Error');
        }
      );
    }

  ngOnInit() {
  console.log(this.data);
  }

}
