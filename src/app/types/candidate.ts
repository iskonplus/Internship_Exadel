import { MatInputModule } from "@angular/material/input";

export enum Status {
  Questionable = 'Questionable',
  Accepted = 'Accepted',
  Declined = 'Declined'
}

export type EnglishLevel = 'beginner' | 'pre-intermediate' | 'intermediate' | 'upper-intermediate' | 'advanced';

export type Specialization = 'front-end' | 'back-end' | 'business analyst'

export interface CandidatesFilter {
  status: Status | 'all';
  specialization: Specialization | 'all'
}

export interface Scores {
  grade: number,
  review: string
}

export interface ScoresForRecruiter {
  id: number
  description: string
  comment: string
  type?: number
}
export interface Candidate {
  id: number
  firstName: string
  lastName: string
  email: string
  skype: string
  phone: string
  specialization: string
  country: number
  englishLevel: string
  isInterviewedByHr?: boolean
  isInterviewedByTech?: boolean
  status?: Status
  scores?: Scores
  assessmentsRecruiter?: ScoresForRecruiter
}
