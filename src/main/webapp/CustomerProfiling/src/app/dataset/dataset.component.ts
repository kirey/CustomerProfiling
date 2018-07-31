import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  constructor() { }

  private datasets = [{name:"jedan"},{name:"dva"},{name:"tri"},{name:"cetiri"}];
  private displayedColumns: string[] = ['datasetName', 'deleting'];

  ngOnInit() {
  }

}
