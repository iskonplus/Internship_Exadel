import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { CalendarModule } from '../calendar/calendar.module'

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    DatepickerComponent
  ]
})
export class DatepickerModule { }
