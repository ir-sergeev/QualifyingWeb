import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthRoutingModule } from './auth-routing.molude';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VerionDialogComponent } from './verion-dialog/verion-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AuthComponent, VerionDialogComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    // ReactiveFormsModule,
  ],
})
export class AuthModule {}
