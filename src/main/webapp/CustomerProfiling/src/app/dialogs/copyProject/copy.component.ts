import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {
  selected = 'option2';
  constructor(public dialogRef: MatDialogRef<CopyComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }
     cancel(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
