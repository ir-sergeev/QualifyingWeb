import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ContentEditComponent implements OnInit {
  input_params: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({});
    this.secondFormGroup = new FormGroup({});
    this.input_params = new FormGroup({});

    this._navigationService._isVersionVisible = false;
    this._navigationService._isTasksVisible = false;
    // this.firstFormGroup = this._formBuilder.group({
    // name: ['', Validators.required],
    // address: ['', Validators.requiredTrue],
    // versionCount: [<50>10, Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
    // });
  }
}
