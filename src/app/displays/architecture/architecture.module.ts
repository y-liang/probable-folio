import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureComponent } from './architecture.component';
import { ArchitectureRoutingModule } from './architecture-routing.module';



@NgModule({
  declarations: [ArchitectureComponent],
  imports: [
    CommonModule,
    ArchitectureRoutingModule
  ]
})
export class ArchitectureModule { }
