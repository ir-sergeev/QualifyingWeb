import { NavigationService } from './../../services/navigation.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  _01LabNumber: string;
  _02LabNumber: string;
  _03LabNumber: string;
  _04LabNumber: string;

  constructor(
    public _authService: AuthService,
    private _navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this._01LabNumber = this._authService._01LabVersion;
    this._02LabNumber = this._authService._02LabVersion;
    this._03LabNumber = this._authService._03LabVersion;
    this._04LabNumber = this._authService._04LabVersion;

    this._navigationService._isTasksVisible = true;
    if (!this._authService.isStudent) {
      this._navigationService._isVersionVisible = true;
    }
  }
}
