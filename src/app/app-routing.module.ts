import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractiveComponent } from './interactive/interactive.component';

const routes: Routes = [
  {path:"page" ,component:InteractiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
