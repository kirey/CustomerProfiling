import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  cancel(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
