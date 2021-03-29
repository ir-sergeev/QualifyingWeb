import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // tslint:disable-next-line:variable-name
  public _isVersionVisible = false;

  // tslint:disable-next-line:variable-name
  public _isTasksVisible = false;

  public any_name: string;

  constructor() {
    this.any_name = 'initial';
  }
}
