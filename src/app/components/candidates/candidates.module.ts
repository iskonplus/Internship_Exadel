import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CandidatesComponent } from './candidates.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateComponent } from './candidate/candidate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesFilterComponent } from './candidates-filter/candidates-filter.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MentorService } from '../../services/mentor.service'
@NgModule({
  declarations: [CandidateComponent,
    CandidatesListComponent,
    CandidatesComponent,
    CandidatesFilterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    TranslateModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CandidatesComponent,
    CandidatesListComponent,
  ],
  providers: [MentorService]
})
export class CandidatesModule { }
