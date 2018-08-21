import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '../../../../node_modules/@angular/forms';
import { EditAlgorithmService } from './edit-algorithm.service';
import { SnackBarService } from '../../shared/services/snackbar.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';


@Component({
  selector: 'app-edit-algorithm',
  templateUrl: './edit-algorithm.component.html',
  styleUrls: ['./edit-algorithm.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class EditAlgorithmComponent implements OnInit {

  addAlgorithmForm: FormGroup;
  parameters: any = [];
  addParametersForm: FormGroup;
  message: boolean = false;
  expand: boolean = false;
  selectedParam: number;

  constructor(public fb: FormBuilder, public service: EditAlgorithmService, public snackbar: SnackBarService, private dialogRef: MatDialogRef<EditAlgorithmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  // Add Parameter
  addParameter() {
    if (this.parameters.length > 0) {
      for (let i = 0; i < this.parameters.length; i++) {
        if (this.addParametersForm.value['parameterName'] == this.parameters[i]['parameterName']) {
          return this.message = true;
        }
        else this.message = false;
      }
    }
    if (!this.message) {
      this.parameters.push(this.addParametersForm.value);
      console.log(this.parameters);
    }
  }
  // Remove Param
  removeJobParam(param, index) {
    this.parameters.splice(index, 1)
  }

  // Expand Param Info
  expandParamsInfo(i) {
    this.expand = !this.expand;

    if (this.expand) this.selectedParam = i;
    else this.selectedParam = null;

  }

  // SUBIMT FUNCTION
  submit() {
    this.data['algorithmName'] = this.addAlgorithmForm.value['algorithmName'];
    this.data['library'] = this.addAlgorithmForm.value['library'];
    this.data['description'] = this.addAlgorithmForm.value['description'];
    this.data['parameters'] = this.parameters;

    // console.log(this.data);

    this.service.editAlgorithm(this.data)
      .subscribe(
        res => {
          // console.log(res);
          this.dialogRef.close();
          this.snackbar.openSnackBar(res['data'], 'Success');
        },
        err => {
          console.log(err);
          this.snackbar.openSnackBar(err['data'], 'Error');
        }
      );
  }

  ngOnInit() {
    if (this.data) {
      console.log(this.data);

      this.parameters = this.data['parameters'];

      this.addParametersForm = new FormGroup({
        parameterName: new FormControl('', Validators.required),
        parameterValueType: new FormControl('', Validators.required),
        defaultValue: new FormControl('', Validators.required)
      });

      this.addAlgorithmForm = this.fb.group({
        algorithmName: [this.data.algorithmName, Validators.required],
        library: [this.data.library, Validators.required],
        description: [this.data.description]
      });
    }
  }

  // FORM GETTERS
  get algorithmName() {
    return this.addAlgorithmForm.get('algorithmName');
  }
  get library() {
    return this.addAlgorithmForm.get('library');
  }
  get description() {
    return this.addAlgorithmForm.get('description');
  }
  get parameterName() {
    return this.addParametersForm.get('parameterName');
  }
  get parameterValueType() {
    return this.addParametersForm.get('parameterValueType');
  }
  get defaultValue() {
    return this.addParametersForm.get('defaultValue');
  }

}
