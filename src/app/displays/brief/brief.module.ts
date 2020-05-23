import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriefComponent } from './brief.component';
import { BriefRoutingModule } from './brief-routing.module';



@NgModule({
  declarations: [BriefComponent],
  imports: [
    CommonModule,
    BriefRoutingModule
  ]
})
export class BriefModule { }
