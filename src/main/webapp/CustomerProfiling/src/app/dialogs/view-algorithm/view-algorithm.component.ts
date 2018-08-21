import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-view-algorithm',
  templateUrl: './view-algorithm.component.html',
  styleUrls: ['./view-algorithm.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ViewAlgorithmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewAlgorithmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

}
