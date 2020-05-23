import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrochureComponent } from './brochure.component';
import { BrochureRoutingModule } from './brochure-routing.module';
import { PreferenceComponent } from './preference/preference.component';
import { SignatureComponent } from './signature/signature.component';
import { ReadabilityComponent } from './readability/readability.component';
import { CipherComponent } from './cipher/cipher.component';
import { MatchComponent } from './match/match.component';



@NgModule({
  declarations: [
    BrochureComponent,
    PreferenceComponent,
    SignatureComponent,
    ReadabilityComponent,
    CipherComponent,
    MatchComponent
  ],
  imports: [
    CommonModule,
    BrochureRoutingModule
  ]
})
export class BrochureModule { }
