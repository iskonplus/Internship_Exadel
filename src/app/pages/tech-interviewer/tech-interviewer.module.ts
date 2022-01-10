import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechInterviewerComponent } from './tech-interviewer.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { TranslateModule } from '@ngx-translate/core';
import { TechInterviewerWindowComponent } from './tech-interviewer-window/tech-interviewer-window.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';
import { TechInterviewerAssessmentModule } from '../../components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { CalendarModule } from '../../components/calendar/calendar.module'
import { MultitoolsModule } from 'src/app/components/multitools/multitools.module';
@NgModule({
	declarations: [
		TechInterviewerComponent,
		TechInterviewerWindowComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		CandidatesModule,
		MatListModule,
		MatInputModule,
		TranslateModule,
		MatButtonModule,
		CandidateDataModule,
		RecruiterAssessmentModule,
		TechInterviewerAssessmentModule,
		CalendarModule,
		MultitoolsModule,
	],
	exports: [
		TechInterviewerComponent
	]
})
export class TechInterviewerModule { }
