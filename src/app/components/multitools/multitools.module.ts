import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TeamConstructorModule } from '../team-constructor/team-constructor.module';
import { CalendarModule } from '../calendar/calendar.module';
import { ArchiveComponent } from '../archive/archive.component';
import { MultitoolsComponent } from './multitools.component';



@NgModule({
	declarations: [
		MultitoolsComponent,
		ArchiveComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatSelectModule,
		MatInputModule,
		MatIconModule,
		TeamConstructorModule,
		CalendarModule,

	],
	exports: [
		MultitoolsComponent
	]
})
export class MultitoolsModule { }
