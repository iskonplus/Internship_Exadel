import { createAction, props } from "@ngrx/store";

export const loadAllSpecializations = createAction('[Directory] Load specializations');
export const loadAllSpecializationsSuccess = createAction('[Directory] Load specializations success', props<{ allSpecializations: any[] }>());
export const loadAllSpecializationsFail = createAction('[Directory] Load specializations fail', props<{ message: string }>());

export const loadAllEnglishLevels = createAction('[Directory] Load english levels');
export const loadAllEnglishLevelsSuccess = createAction('[Directory] Load english levels success', props<{ allEnglishLevels: any[] }>());
export const loadAllEnglishLevelsFail = createAction('[Directory] Load english levels fail', props<{ message: string }>());

export const loadAllCountries = createAction('[Directory] Load countries');
export const loadAllCountriesSuccess = createAction('[Directory] Load countries success', props<{ allCountries: any[] }>());
export const loadAllCountriesFail = createAction('[Directory] Load countries fail', props<{ message: string }>());

export const loadCitiesByCountryId = createAction('[Directory] Load cities', props<{ countryId: number }>());
export const loadCitiesByCountryIdSuccess = createAction('[Directory] Load cities success', props<{ citiesByCountryId: any[] }>());
export const loadCitiesByCountryIdFail = createAction('[Directory] Load cities fail', props<{ message: string }>());

export const loadAllSkills = createAction('[Directory] Load skills');
export const loadAllSkillsSuccess = createAction('[Directory] Load skills success', props<{ allSkills: any[] }>());
export const loadAllSkillsFail = createAction('[Directory] Load skills', props<{ message: string }>());

export const loadCountryById = createAction('[Directory] Load country', props<{ countryId: number }>());
export const loadCountryByIdSuccess = createAction('[Directory] Load country success', props<{ country }>());
export const loadCountryByIdFail = createAction('[Directory] Load country fail', props<{ message: string }>());

