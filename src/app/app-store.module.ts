import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { candidatesReducer } from './store/candidates/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CandidatesEffects } from './store/candidates/effects';
import {reducers} from './store';
import {DirectoryEffects} from './store/directory/effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CandidatesEffects, DirectoryEffects])
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class AppStoreModule { }
