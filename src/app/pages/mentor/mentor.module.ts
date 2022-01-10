import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorReviewComponent } from './mentor-review/mentor-review.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MentorComponent } from './mentor.component';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { TechInterviewerAssessmentModule } from '../../components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';
import { MentorWindowComponent } from './mentor-window/mentor-window.component';
import { TranslateModule } from '@ngx-translate/core';
import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { MentorService } from 'src/app/services/mentor.service';
import { CandidatesService } from '../../services/candidates.service'
import { MultitoolsModule } from 'src/app/components/multitools/multitools.module';
@NgModule({
	declarations: [
		MentorReviewComponent,
		MentorComponent,
		MentorWindowComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		CandidatesModule,
		TechInterviewerAssessmentModule,
		RecruiterAssessmentModule,
		TranslateModule,
		CandidateDataModule,
		MultitoolsModule,

	],
	exports: [
		MentorComponent
	],
	providers: [
		MentorService,
		CandidatesService]
})
export class MentorModule { }
