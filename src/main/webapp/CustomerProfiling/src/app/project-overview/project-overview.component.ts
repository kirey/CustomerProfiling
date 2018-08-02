import { Component, OnInit } from '@angular/core';
import { ProjectOverviewService } from './project.overview.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  selected = 'option2';
  constructor(public projectOverviewService: ProjectOverviewService) { }

  ngOnInit() {
  }

}
