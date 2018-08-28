import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CopyProjectService } from './copyProject.service';
import { SnackBarService } from './../../shared/services/snackbar.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CopyComponent implements OnInit {
  selected = 'option2';
  constructor(
    public dialogRef: MatDialogRef<CopyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public copyProjectService: CopyProjectService,
    public snackbar: SnackBarService
  ) { }
  copyProject(obj) {
    obj['id'] = this.data.id;
    // console.log(obj);
    this.copyProjectService.copyProjects(obj).subscribe(
      res => {
        // console.log(res);
        this.snackbar.openSnackBar(res['message'], 'Success');
        this.dialogRef.close();
      },
      err => {
        console.log(err);
        this.snackbar.openSnackBar(err['message'], 'Error');
      }
    );
  }
  cancel(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    // console.log(this.data);
  }
}
