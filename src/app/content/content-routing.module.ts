// import { ContentEditModule } from './content-edit/content-edit.module';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { DetailsComponent } from './details/details.component';
import { ContextComponent } from './context/context.component';
import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childrenRoutes: Routes = [
  // {
  //   path: 'context-edit',
  //   loadChildren: () =>
  //     import('./content-edit/content-edit.module').then(
  //       (c) => c.ContentEditModule
  //     ),
  // },
  { path: 'details', component: DetailsComponent },
  { path: 'context', component: ContextComponent },
  { path: 'context-edit', component: ContentEditComponent },
  { path: '', redirectTo: 'context' },
];

const routes: Routes = [
  { path: '', component: ContentComponent, children: childrenRoutes },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
