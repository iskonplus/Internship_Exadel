import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DirectoryState } from './reducer';

export const selectFeature = createFeatureSelector<DirectoryState>('directory');
export const selectAllSpecializations = createSelector(selectFeature, ({ allSpecializations }) => allSpecializations);
export const selectAllEnglishLevels = createSelector(selectFeature, ({ allEnglishLevels }) => allEnglishLevels);
export const selectAllCountries = createSelector(selectFeature, ({ allCountries }) => allCountries);
export const selectCitiesByCountryId = createSelector(selectFeature, ({ citiesByCountryId }) => citiesByCountryId);
export const selectAllSkills = createSelector(selectFeature, ({ allSkills }) => allSkills);
export const selectCountyById = createSelector(selectFeature, ({ country }) => country);
