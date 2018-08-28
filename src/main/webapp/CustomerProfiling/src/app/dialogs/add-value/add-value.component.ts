import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'app-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddValueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddValueComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) { }

  private addValueForm: FormGroup;
  private displayedColumns: string[] = ['parameterName', 'parameterValueType', 'parameterValue'];
  private error: boolean = false;
  private valuesData: any;

  ngOnInit() {

    // console.log(this.data);
    if (this.data.type == 'addValueDialog') {
      this.addValueForm = this._formBuilder.group({
        value: ['', Validators.required]
      });
    }
    if (this.data.type == 'editParams') {
      this.valuesData = this.data.data;
    }
  }
  inputChanged(ev, i) {
    // if (ev.length > 0) {
    //   this.valuesData[i].parameterValues[0].value = ev;
    // }
  }

  // MULTIPLE VALUES CANCEL
  cancel() {
    this.dialogRef.close();
  }

  // MULTIPLE VALUES
  saveParams() {
    let checkArray = [];

    for (let i = 0; i < this.valuesData.length; i++) {
      if (!this.valuesData[i].parameterValues[0].value) {
        this.error = true;
      }
      else {
        checkArray.push(1);
      }
    }
    if (checkArray.length == this.data.data.length) {
      this.error = false;
      this.dialogRef.close(this.data.data);
    }
  }

  // ONE VALUE
  addValue() {
    if (this.addValueForm.value) this.dialogRef.close(this.addValueForm.value);
    else this.dialogRef.close(this.data.value);
  }


}
