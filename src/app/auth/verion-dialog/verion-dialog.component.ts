import { Router } from '@angular/router';
import { VersionsMock } from './versionMock';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Version } from './version';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verion-dialog',
  templateUrl: './verion-dialog.component.html',
  styleUrls: ['./verion-dialog.component.scss'],
})
export class VerionDialogComponent {
  // data: Data;
  versionsMock: Version[];
  _isLoaded: boolean;

  constructor(
    public dialogRef: MatDialogRef<VerionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private router: Router,
    private _authService: AuthService
  ) {
    this.versionsMock = VersionsMock;
    this.data = new Data();
    // this.data._01versionNumber = '';
    // this.data._02versionNumber = '';
    // this.data._03versionNumber = '';
    // this.data._04versionNumber = '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public StudentLogin(): void {
    this._isLoaded = true;
    console.log('load is true');
    setTimeout(() => {
      this._authService.SetAuthStudent(
        this.data._01versionNumber,
        this.data._02versionNumber,
        this.data._03versionNumber,
        this.data._04versionNumber
      );
      this._isLoaded = false;
      this.router.navigate(['/content/context']);
    }, 3500);
  }
}

export class Data {
  _01versionNumber: string;
  _02versionNumber: string;
  _03versionNumber: string;
  _04versionNumber: string;
}
