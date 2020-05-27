import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {
    path: '', component: OverviewComponent, children: [
      {
        path: 'sandbox',
        // loadChildren: () => import(`./brochure/brochure.module`).then(m => m.BrochureModule)
        loadChildren: './brochure/brochure.module#BrochureModule'
      },


      { path: '', redirectTo: 'sandbox', pathMatch: 'full' },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
