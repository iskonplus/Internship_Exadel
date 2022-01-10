import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateDataComponent } from './candidate-data.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CandidateDataComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    TranslateModule,
  ],
  exports: [
    CandidateDataComponent
  ]
})
export class CandidateDataModule { }
