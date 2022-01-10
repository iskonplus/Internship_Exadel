import { Candidate } from "./candidate";
import { User } from "./user";

export interface SendboxTeam {
	mentors: User[]
	candidates: Candidate[]
  }