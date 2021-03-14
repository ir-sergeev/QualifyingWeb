import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((c) => c.AuthModule),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('./content/content.module').then((c) => c.ContentModule),
  },
  { path: 'home', component: AppComponent },
  { path: '*', redirectTo: 'auth' },
  { path: '**', redirectTo: '/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
