import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliesModule } from './supplies/supplies.module';
import { ArchitectureModule } from './displays/architecture/architecture.module';
import { BriefModule } from './displays/brief/brief.module';
import { JournalModule } from './displays/journal/journal.module';
import { OverviewModule } from './displays/overview/overview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SuppliesModule,

    ArchitectureModule,
    BriefModule,
    JournalModule,
    OverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
