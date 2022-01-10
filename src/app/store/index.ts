import {candidatesReducer, CandidatesState} from './candidates/reducer';
import {directoryReducer, DirectoryState} from './directory/reducer';
import {ActionReducerMap} from '@ngrx/store';

interface AppState {
  candidates: CandidatesState,
  directory: DirectoryState
}

export const reducers: ActionReducerMap<AppState> = {
  candidates: candidatesReducer,
  directory: directoryReducer
}


