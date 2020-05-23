import { NgModule } from '@angular/core';
import { BriefComponent } from './brief.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BriefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefRoutingModule { }
