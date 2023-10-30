import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ques1Component } from './ques1/ques1.component';

const routes: Routes = [
  {path:'Ques1',component:Ques1Component},
  // {path:'**',component:Ques1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
