import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    cancel(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
