import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeHabitudesComponent } from './liste-habitudes/liste-habitudes.component';
import { StatsComponent } from './stats/stats.component';
import { RewardsComponent } from './rewards/rewards.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeHabitudesComponent,
    StatsComponent,
    RewardsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
