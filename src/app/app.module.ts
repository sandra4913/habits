import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [{ provide: 'LOCALE_ID', useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
