import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesModule } from '../../components/candidates/candidates.module';
import { ManagerComponent } from './manager.component';
import { CandidateDataModule } from '../../components/candidate-data/candidate-data.module';
import { RecruiterAssessmentModule } from '../../components/recruiter-assessment/recruiter-assessment.module';
import { TechInterviewerAssessmentModule } from '../../components/tech-interviewer-assessment/tech-interviewer-assessment.module';
import { ManagerWindowComponent } from './manager-window/manager-window.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DatepickerModule } from 'src/app/components/datepicker/datepicker.module';
import { TeamConstructorModule } from '../../components/team-constructor/team-constructor.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MultitoolsModule } from '../../components/multitools/multitools.module';


@NgModule({
	declarations: [
		ManagerComponent,
		ManagerWindowComponent,
	],
	imports: [
		CommonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatFormFieldModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		CandidatesModule,
		CandidateDataModule,
		RecruiterAssessmentModule,
		TechInterviewerAssessmentModule,
		TranslateModule,
		CandidatesModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		MatListModule,
		MatIconModule,
		DatepickerModule,
		TeamConstructorModule,
		MultitoolsModule,
	]
})
export class ManagerModule { }
