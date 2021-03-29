import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../models/UserAccount';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isStudent = false;
  // tslint:disable-next-line:variable-name
  public _01LabVersion: string;
  // tslint:disable-next-line:variable-name
  public _02LabVersion: string;
  // tslint:disable-next-line:variable-name
  public _03LabVersion: string;
  // tslint:disable-next-line:variable-name
  public _04LabVersion: string;

  constructor(private http: HttpClient) {}

  public SetAuthStudent(
    _01Number: string,
    _02Number: string,
    _03Number: string,
    _04Number: string
  ): void {
    this.isStudent = true;
    this._01LabVersion = _01Number;
    this._02LabVersion = _02Number;
    this._03LabVersion = _03Number;
    this._04LabVersion = _04Number;
  }

  public UserLogin(user: UserAccount): boolean {
    if (user.login_name == 'sa' && user.password == '') {
      return true;
    }

    return false;
  }

  public StudentLogin() {}
}
