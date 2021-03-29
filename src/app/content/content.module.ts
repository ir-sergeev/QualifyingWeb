import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContextComponent } from './context/context.component';
import { DetailsComponent } from './details/details.component';
import { VersionsListComponent } from './navigation/versions-list/versions-list.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
//
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    ContentComponent,
    NavigationComponent,
    ContextComponent,
    DetailsComponent,
    VersionsListComponent,
    ContentEditComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class ContentModule {}
