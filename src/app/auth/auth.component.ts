import { UserAccount } from './../models/UserAccount';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  VerionDialogComponent,
  Data,
} from './verion-dialog/verion-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  userAccount: UserAccount;
  _isLoaded;
  _login: string;
  _password: string;

  formAccount: FormGroup;
  accountName: FormControl;

  constructor(
    public dialog: MatDialog,
    private _authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userAccount = new UserAccount();

    this.formAccount = new FormGroup({
      accountName: new FormControl(),
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(VerionDialogComponent, {
      width: '300px',
      height: 'auto',
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result: Data) => {
      this._isLoaded = true;
      if (result) {
        this._authService.SetAuthStudent(
          result._01versionNumber,
          result._02versionNumber,
          result._03versionNumber,
          result._04versionNumber
        );
      }
    });
  }

  public UserLogin(): void {
    this._isLoaded = true;
    console.log('load is true');
    setTimeout(() => {
      console.log(this._login, this._password);
      if (this._login) {
        this._password = '';
        this.userAccount.login_name = this._login;
        this.userAccount.password = this._password;
        var result;
        result = this._authService.UserLogin(this.userAccount);

        console.log(result);
        if (result) {
          this.router.navigate(['/content/context']);
        }
      }
      console.log('load is false');
      this._isLoaded = false;
    }, 3500);
  }
}
