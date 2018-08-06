import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CopyProjectService } from './copyProject.service';
import { SnackBarService } from './../../shared/services/snackbar.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {
  selected = 'option2';
  constructor(
    public dialogRef: MatDialogRef<CopyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public copyProjectService: CopyProjectService,
    public snackbar: SnackBarService
  ) {}
  copyProject(obj) {
    obj['id'] = this.data.id;
    console.log(obj);
    this.copyProjectService.copyProjects(obj).subscribe(
      res => {
        console.log(res);
        this.snackbar.openSnackBar(res['data'], 'Success');
        this.dialogRef.close();
      },
      err => {
        console.log(err);
        this.snackbar.openSnackBar('Something went wrong.', 'Error');
      }
    );
  }
  cancel(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }
}