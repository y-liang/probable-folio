import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'architecture',
    // loadChildren: () => import(`./displays/architecture/architecture.module`).then(m => m.ArchitectureModule)
    loadChildren: './displays/architecture/architecture.module#ArchitectureModule'
  },
  {
    path: 'resume',
    // loadChildren: () => import(`./displays/brief/brief.module`).then(m => m.BriefModule),
    loadChildren: './displays/brief/brief.module#BriefModule'
  },
  {
    path: 'journal',
    // loadChildren: () => import(`./displays/journal/journal.module`).then(m => m.JournalModule),
    loadChildren: './displays/journal/journal.module'
  },
  {
    path: 'overview',
    // loadChildren: () => import(`./displays/overview/overview.module`).then(m => m.OverviewModule),
    loadChildren: './displays/overview/overview.module#OverviewModule'
  },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
