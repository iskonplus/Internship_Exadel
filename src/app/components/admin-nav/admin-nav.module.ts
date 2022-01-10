import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin-nav.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
	declarations: [
		AdminNavComponent,
	],
	imports: [
		CommonModule,
		MatSelectModule,
	],
	exports: [
		AdminNavComponent,
	]
})
export class AdminNavModule { }
