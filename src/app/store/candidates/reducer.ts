import { createReducer, on } from '@ngrx/store';
import { loadCandidatesList, loadCandidatesListSuccess, selectCandidate, updateCandidateSuccess } from './actions';
import { Candidate } from '../../types/candidate';

export interface CandidatesState {
  candidatesList: Candidate[];
  loading: boolean;
  selectedCandidate: Candidate
}

export const initialState: CandidatesState = {
  candidatesList: [],
  loading: false,
  selectedCandidate: null
};

const _candidatesReducer = createReducer(
  initialState,
  on(loadCandidatesList, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadCandidatesListSuccess, (state, { candidatesList }) => {
    return {
      ...state,
      loading: false,
      candidatesList,
      selectedCandidate: candidatesList[0]
    }
  }),
  on(selectCandidate, (state, { selectedCandidate }) => {
    return {
      ...state,
      selectedCandidate
    }
  }),
  on(updateCandidateSuccess, (state, { candidate }) => {
    return {
      ...state,
      candidatesList: state.candidatesList.map(el => {
        return el.firstName === candidate.firstName && candidate
      })
    }
  })
);


export function candidatesReducer(state, action) {
  return _candidatesReducer(state, action);
}
