import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamConstructorComponent } from './team-constructor.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TeamConstructorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
	MatButtonModule,

  ],
  exports: [
    TeamConstructorComponent
  ]
})
export class TeamConstructorModule { }
