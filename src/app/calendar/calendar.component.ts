import { Component } from '@angular/core';
import { CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { addDays } from 'date-fns';
import { fr } from 'date-fns/locale';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  viewDate: Date = new Date();
  locale: string = 'fr';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  events: CalendarEvent[] = [
    {
      start: addDays(new Date(), 0),
      title: 'Événement 1'
    }
  ];
}
