import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isTasksVisible: boolean;
  isVersionsVisible: boolean;

  constructor(public _navigationService: NavigationService) {}

  ngOnInit(): void {
    this.isTasksVisible = this._navigationService._isTasksVisible;
    this.isVersionsVisible = this._navigationService._isVersionVisible;
  }
}
