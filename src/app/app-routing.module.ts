import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeHabitudesComponent } from './liste-habitudes/liste-habitudes.component';
import { StatsComponent } from './stats/stats.component';
import { RewardsComponent } from './rewards/rewards.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: ListeHabitudesComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
