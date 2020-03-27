import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovidGraphComponent } from './covid-graph/covid-graph.component';
import { UiModule } from '@covidly/ui';
@NgModule({
  declarations: [AppComponent, CovidGraphComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
