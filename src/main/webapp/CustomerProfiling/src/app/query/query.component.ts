import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QueryComponent implements OnInit {
  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
