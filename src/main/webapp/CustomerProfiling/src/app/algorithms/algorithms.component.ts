import { Component, OnInit } from '@angular/core';
import { AlgorithmsService } from './algorithms.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  constructor(public service: AlgorithmsService) { }

  getAll() {
    this.service.getAll()
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
  }
  ngOnInit() {
    this.getAll();
  }

}
