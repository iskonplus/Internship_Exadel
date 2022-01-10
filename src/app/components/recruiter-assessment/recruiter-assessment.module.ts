import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterAssessmentComponent } from './recruiter-assessment.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecruiterAssessmentComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [
    RecruiterAssessmentComponent,
  ]
})
export class RecruiterAssessmentModule { }
