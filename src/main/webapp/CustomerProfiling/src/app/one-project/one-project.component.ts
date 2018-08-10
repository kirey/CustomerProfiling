import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.scss']
})
export class OneProjectComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  disableTabs: boolean = true;

  disableTabsChange(ev) {
    this.disableTabs = ev;
  }

  ngOnInit() {
  }

}
