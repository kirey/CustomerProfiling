import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneProjectComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  disableTabs: boolean = true;

  disableTabsChange(ev) {
    this.disableTabs = ev;
  }

  backBtn() {
    this.sharedService.resetValuesOneProject();
  }

  ngOnInit() {
  }

}
