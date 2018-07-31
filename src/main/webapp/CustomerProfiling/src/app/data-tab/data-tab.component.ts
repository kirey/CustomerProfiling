import { Component, OnInit } from '@angular/core';
import { DataTabService } from './data-tab.service';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss']
})
export class DataTabComponent implements OnInit {

  constructor(public dataTabSrevice: DataTabService) { }

  variables: any = [];

  getVariables() {
    this.dataTabSrevice.getVariables()
      .subscribe(
        res => {
          console.log(res);
          this.variables = res['data'];
        },
        err => {
          console.log(err);
        }
      )
  }

  ngOnInit() {
    this.getVariables();
  }

}
