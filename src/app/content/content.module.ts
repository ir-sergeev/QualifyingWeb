import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContextComponent } from './context/context.component';
import { DetailsComponent } from './details/details.component';
import { VersionsListComponent } from './navigation/versions-list/versions-list.component';

@NgModule({
  declarations: [
    ContentComponent,
    NavigationComponent,
    ContextComponent,
    DetailsComponent,
    VersionsListComponent,
  ],
  imports: [CommonModule, ContentRoutingModule],
})
export class ContentModule {}
