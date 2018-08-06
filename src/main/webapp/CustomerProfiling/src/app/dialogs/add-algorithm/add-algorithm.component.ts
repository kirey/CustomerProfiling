import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '../../../../node_modules/@angular/forms';
import { AddAlgorithmService } from './add-algorithm.service';

@Component({
  selector: 'app-add-algorithm',
  templateUrl: './add-algorithm.component.html',
  styleUrls: ['./add-algorithm.component.scss']
})
export class AddAlgorithmComponent implements OnInit {

  addAlgorithmForm: FormGroup;
  parameters: any = [];
  addParametersForm: FormGroup;
  message: boolean = false;
  expand: boolean = false;
  selectedParam: number;

  constructor(public fb: FormBuilder, public service: AddAlgorithmService) { }

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
    if (this.parameters.length == 0) {
      console.log('ENTER PARAM');
    }
    else {
      console.log(this.addAlgorithmForm.value);
      this.addAlgorithmForm.value['parameters'] = this.parameters;

      this.service.addAlgorithm(this.addAlgorithmForm.value)
        .subscribe(
          res => {
            console.log(res)
          },
          err => {
            console.log(err)
          }
        );
    }
  }

  ngOnInit() {

    this.addParametersForm = new FormGroup({
      parameterName: new FormControl('', Validators.required),
      parameterValueType: new FormControl('', Validators.required),
      defaultValue: new FormControl('', Validators.required)
    });

    this.addAlgorithmForm = this.fb.group({
      algorithmName: ['', Validators.required],
      library: ['', Validators.required],
      description: ['']
    });
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