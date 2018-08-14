import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  private value;

  ngOnInit() {
    this.addValueForm = this._formBuilder.group({
      value: ['', Validators.required]
    });
  }

  addValue() {
    this.dialogRef.close(this.addValueForm.value);
  }

}
