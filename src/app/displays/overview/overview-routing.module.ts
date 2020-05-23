import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {
    path: '', component: OverviewComponent, children: [
      {
        path: 'brochure',
        loadChildren: () => import(`./brochure/brochure.module`).then(m => m.BrochureModule)
      },


      { path: '', redirectTo: 'brochure', pathMatch: 'full' },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
