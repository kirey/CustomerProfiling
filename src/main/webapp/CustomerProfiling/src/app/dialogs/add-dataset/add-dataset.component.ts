import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddDatasetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDatasetComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) { }

  private name;
  private description;
  private csvFile;
  private csvFileButton = 'Browse for .csv file';
  private datasetForm:FormGroup;

  ngOnInit() {
    this.datasetForm = this._formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required],
      csv: ['', Validators.required],
    });
  }

  handleCSVFile(files: FileList) {
    this.csvFile = files[0];
    this.csvFileButton = files[0].name + ' Size:' + files[0].size;
  }

  addDataset() {
    const datasetObj = {
        name:this.name,
        description:this.description,
        csvFile: this.csvFile
    }
    console.log(datasetObj);
  }

}
