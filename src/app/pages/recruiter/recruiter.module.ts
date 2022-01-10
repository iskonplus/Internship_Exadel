import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { RecruiterWindowComponent } from './recruiter-window/recruiter-window.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';
import { TechInterviewerAssessmentModule } from '../../components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { MatButtonModule } from '@angular/material/button';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';
import { MultitoolsModule } from 'src/app/components/multitools/multitools.module';

@NgModule({
  declarations: [
    RecruiterComponent,
    RecruiterWindowComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
    CandidatesModule,
    CandidateDataModule,
    RecruiterAssessmentModule,
    TechInterviewerAssessmentModule,
    MatButtonModule,

    CalendarModule,

    MultitoolsModule,

  ],
  exports: [RecruiterComponent]
})
export class RecruiterModule { }
