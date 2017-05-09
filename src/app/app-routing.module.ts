import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [RouterModule.forRoot([{path: '*', component: AppComponent}])],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }