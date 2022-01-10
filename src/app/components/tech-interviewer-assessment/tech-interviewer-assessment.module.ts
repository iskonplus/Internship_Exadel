import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechInterviewerAssessmentComponent } from './tech-interviewer-assessment.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TechInterviewerAssessmentComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [
    TechInterviewerAssessmentComponent
  ]
})
export class TechInterviewerAssessmentModule { }
