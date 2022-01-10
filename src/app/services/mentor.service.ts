import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../types/candidate';


@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  // getMentorCandidates(): Observable<Candidate[]> {
  //   return this.http.get<Candidate[]>('/api/candidate/get-candidates-for-mentor')
  // }

  addMentorAssessment(model, body) {
    return this.http.post(`/api/mentor/${model}/add-assessment`, body)
  }

}
