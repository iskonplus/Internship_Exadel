import { createReducer, on } from '@ngrx/store';
import {
  loadAllCountries,
  loadAllCountriesSuccess,
  loadAllEnglishLevels,
  loadAllEnglishLevelsSuccess,
  loadAllSkills,
  loadAllSkillsSuccess,
  loadAllSpecializations,
  loadAllSpecializationsSuccess,
  loadCitiesByCountryId,
  loadCitiesByCountryIdSuccess,
  loadCountryById,
  loadCountryByIdSuccess,
} from './actions';

export interface DirectoryState {
  allSpecializations: any[];
  allEnglishLevels: any[];
  allCountries: any[];
  citiesByCountryId: any[];
  allSkills: any[];
  country: any
  loading: boolean
}

export const initialState: DirectoryState = {
  allSpecializations: [],
  allEnglishLevels: [],
  allCountries: [],
  citiesByCountryId: [],
  allSkills: [],
  country: null,
  loading: false
}

const _directoryReducer = createReducer(
  initialState,
  on(loadAllSpecializations, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllSpecializationsSuccess, (state, { allSpecializations }) => {
    return {
      ...state,
      allSpecializations,
      loading: false
    }
  }),
  on(loadAllEnglishLevels, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllEnglishLevelsSuccess, (state, { allEnglishLevels }) => {
    return {
      ...state,
      allEnglishLevels,
      loading: false
    }
  }),
  on(loadAllCountries, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllCountriesSuccess, (state, { allCountries }) =>{
    return {
      ...state,
      allCountries,
      loading: false
    }
  }),
  on(loadCitiesByCountryId, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadCitiesByCountryIdSuccess, (state, { citiesByCountryId }) => {
    return {
      ...state,
      citiesByCountryId,
      loading: false
    }
  }),
  on(loadAllSkills, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllSkillsSuccess, (state, { allSkills }) => {
    return {
      ...state,
      loading: false,
      allSkills
    }
  }),
  on(loadCountryById, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadCountryByIdSuccess, (state, { country }) => {
    return {
      ...state,
      loading: false,
      country
    }
  })
)

export function directoryReducer(state, action) {
  return _directoryReducer(state, action);
}
