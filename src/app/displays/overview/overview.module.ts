import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { BrochureModule } from './brochure/brochure.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { IntroComponent } from './intro/intro.component';
import { OutroComponent } from './outro/outro.component';
import { MosaicComponent } from './mosaic/mosaic.component';
import { BrochureComponent } from './brochure/brochure.component';



@NgModule({
  declarations: [
    OverviewComponent,
    TopBarComponent,
    LeftBarComponent,
    BottomBarComponent,
    IntroComponent,
    OutroComponent,
    MosaicComponent,

  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,

    BrochureModule
  ]
})
export class OverviewModule { }
