import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrochureComponent } from './brochure.component';
import { CipherComponent } from './cipher/cipher.component';
import { MatchComponent } from './match/match.component';
import { PreferenceComponent } from './preference/preference.component';
import { ReadabilityComponent } from './readability/readability.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  {
    path: '', component: BrochureComponent, children: [
      { path: 'cipher', component: CipherComponent },
      { path: 'match', component: MatchComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'readability', component: ReadabilityComponent },
      { path: 'signature', component: SignatureComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrochureRoutingModule { }
