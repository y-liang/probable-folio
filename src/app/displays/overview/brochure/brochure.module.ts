import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrochureComponent } from './brochure.component';
import { BrochureRoutingModule } from './brochure-routing.module';
import { PreferenceComponent } from './preference/preference.component';
import { SignatureComponent } from './signature/signature.component';
import { ReadabilityComponent } from './readability/readability.component';
import { CipherComponent } from './cipher/cipher.component';
import { MatchComponent } from './match/match.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FacadeComponent } from './facade/facade.component';



@NgModule({
  declarations: [
    BrochureComponent,
    PreferenceComponent,
    SignatureComponent,
    ReadabilityComponent,
    CipherComponent,
    MatchComponent,
    NavigationComponent,
    FacadeComponent,
  ],
  imports: [
    CommonModule,
    BrochureRoutingModule,

    ReactiveFormsModule,
    DragDropModule,



  ]
})
export class BrochureModule { }
