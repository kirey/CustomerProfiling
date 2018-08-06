import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectOverviewService } from './project.overview.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectOverviewComponent implements OnInit {
  selected = 'option2';
  id: number;
  dataset: any;
  details: any;
  projectId: any;
  algorithms: any;

  constructor(public projectOverviewService: ProjectOverviewService) { }
 // Get Projects
 getDataset() {
  this.projectOverviewService.getDataset().subscribe(
    res => {
      this.dataset = res.data;
    },
    err => console.log(err)
  );
}
selectedDataset(ev, id) {
  console.log(ev, id);
  this.projectOverviewService.getDatasetDetails(id).subscribe(
    res => {
      this.details = res.data;
    },
    err => console.log(err)
  );
}
   getProjectId() {
    return localStorage.getItem('projectID');
}
getAlorithmsProject() {
  this.projectOverviewService.getAlgorithms(this.getProjectId()).subscribe(
    res => {
      console.log(res);
      this.algorithms = res.data;
      console.log(this.algorithms);
    },
    err => console.log(err)
  );
}
  ngOnInit() {
this.projectOverviewService.getProject(this.getProjectId()).subscribe(res => {
  this.projectId = res.data;
});
this.getDataset();
this.getAlorithmsProject();
  }

}
