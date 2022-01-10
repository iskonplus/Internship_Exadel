import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CandidatesState } from "./reducer";

export const selectFeature = createFeatureSelector<CandidatesState>('candidates');
export const selectCandidatesList = createSelector(selectFeature, ({ candidatesList }) => candidatesList);
export const selectCandidatesListLoading = createSelector(selectFeature, ({ loading }) => loading);
export const selectSelectCandidate = createSelector(selectFeature, ({ selectedCandidate }) => selectedCandidate);
