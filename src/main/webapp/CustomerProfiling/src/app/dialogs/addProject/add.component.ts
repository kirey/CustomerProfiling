import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { AddProjectService } from './addProject.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  addProjectForm: FormGroup;
  project: any;
  constructor(public addProjectService: AddProjectService,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder) { }
  cancel(): void {
    this.dialogRef.close();
  }
  addProject() {
    const project = this.addProjectForm.value;
    console.log(project);
    this.addProjectService.addProject(project).subscribe(
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
    this.addProjectForm = this.formBuilder.group({
      projectName: [''],
      description: ['']
    });
  }

}
