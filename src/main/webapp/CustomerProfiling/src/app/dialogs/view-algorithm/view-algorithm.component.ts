import { Component, OnInit, Inject } from '@angular/core';
import { ViewAlgorithmService } from './view-algorithm.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-view-algorithm',
  templateUrl: './view-algorithm.component.html',
  styleUrls: ['./view-algorithm.component.scss']
})
export class ViewAlgorithmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewAlgorithmComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public service: ViewAlgorithmService) { }

  getAlgorithm(id) {
    this.service.getAlgorithm(id)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err)
        }
      )
  }

  ngOnInit() {
    if (this.data) {
      this.getAlgorithm(this.data);
    }
  }

}
