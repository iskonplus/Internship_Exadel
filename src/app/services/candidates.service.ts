import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { Candidate, CandidatesFilter, EnglishLevel, Specialization, Status } from '../types/candidate';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserLoginService } from './user-login.service'
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  activeUserRole: string;

  private candidatesInTeam: BehaviorSubject<Candidate>

  constructor(private httpClient: HttpClient, private userLoginService: UserLoginService) {
    this.candidatesInTeam = new BehaviorSubject<Candidate>(null)

  }

  getSelectedCandidate(): Observable<Candidate> {
    return this.candidatesInTeam.asObservable();
  }

  setSelectedCandidate(value) {
    this.candidatesInTeam.next(value);
  };

  getCandidatesFromLocalStorage() {
    this.activeUserRole = this.userLoginService.activeUser.role;

    if (this.activeUserRole === 'techInterviewer') {
      return JSON.parse(localStorage.getItem('Candidate')).filter(candidate => candidate.isInterviewedByHr === true && !candidate.status);
    }

    if (this.activeUserRole === 'mentor') {
      return JSON.parse(localStorage.getItem('Candidate')).filter(candidate => candidate.status === Status.Accepted);
    }

    return JSON.parse(localStorage.getItem('Candidate'));
  }


  // loadCandidates(filter?: CandidatesFilter): Observable<Candidate[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'accept': 'text/plain'
  //     })
  //   };
  //
  //   this.activeUserRole = this.userLoginService.activeUser.role
  //
  //   if (this.activeUserRole === 'mentor') {
  //     return this.httpClient.get<Candidate[]>('/api/candidate/get-candidates-for-mentor');
  //   }
  //
  //   if (this.activeUserRole === 'techInterviewer') {
  //     return this.httpClient.get<Candidate[]>('api/hr/getallcandidates', httpOptions).pipe(
  //       map(candidates => candidates.filter(candidate => {
  //         candidate.isInterviewedByHr === true && !candidate.status
  //       }))
  //     );
  //   }
  //
  //   return this.httpClient.get<Candidate[]>('api/hr/getallcandidates', httpOptions).pipe(
  //     map(candidates => candidates.filter(candidate => {
  //       if (!filter) {
  //         return true
  //       }
  //       const fitsStatus = filter.status === 'all' ? candidate : filter.status === null || filter.status === candidate.status;
  //       const fitsSpecialization = filter.specialization === 'all' ? candidate : filter.specialization === null || filter.specialization === candidate.specialization;
  //       return fitsStatus && fitsSpecialization;
  //     }))
  //   )
  // }


  loadCandidates(filter?: CandidatesFilter): Observable<Candidate[]> {
    this.activeUserRole = this.userLoginService.activeUser.role;

    const candidates = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmith@gmail.com',
        skype: 'jsmith332',
        phone: '+827169129317',
        specialization: 'front-end' as Specialization,
        country: 51,
        englishLevel: 'advanced' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Accepted,

      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Donovan',
        email: 'donovan721@yahoo.com',
        skype: 'Annie78',
        phone: '+912313871293',
        specialization: 'back-end' as Specialization,
        country: 20,
        englishLevel: 'intermediate' as EnglishLevel,
        isInterviewedByHr: false,
        isInterviewedByTech: false,

      },
      {
        id: 3,
        firstName: 'Rick',
        lastName: 'Gonsales',
        email: 'neversleep@gmail.com',
        skype: 'rick gonsales',
        phone: '+183131831',
        specialization: 'business analyst' as Specialization,
        country: 35,
        englishLevel: 'pre-intermediate' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: false,

      },
      {
        id: 4,
        firstName: 'Mark',
        lastName: 'Tornhes',
        email: 'markT@gmail.com',
        skype: 'tornhes99',
        phone: '+878247878782',
        specialization: 'business analyst' as Specialization,
        country: 189,
        englishLevel: 'beginner' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Accepted,


      },
      {
        id: 5,
        firstName: 'Britney',
        lastName: 'Sterry',
        email: 'kittieB@domain.com',
        skype: 'kittiekittie',
        phone: '+19128828112',
        specialization: 'front-end' as Specialization,
        country: 77,
        englishLevel: 'beginner' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Questionable,

      }
    ].filter(candidate => {
      if (!filter) {
        return true
      }
      const fitsStatus = filter.status === 'all' ? candidate : filter.status === null || filter.status === candidate.status;
      const fitsSpecialization = filter.specialization === 'all' ? candidate : filter.specialization === null || filter.specialization === candidate.specialization;
      return fitsStatus && fitsSpecialization;
    });
    if (this.activeUserRole === 'techInterviewer') {
      return of(candidates.filter(candidate => candidate.isInterviewedByHr === true && !candidate.status));
    }

    if (this.activeUserRole === 'mentor') {
      return of(candidates.filter(candidate => candidate.status === Status.Accepted))
    }
    return of(candidates);
  }

  updateCandidate(candidate: Candidate) {
    const candidatesFromLocalStorage = JSON.parse(localStorage.getItem('Candidate'));
    const index = candidatesFromLocalStorage.findIndex(c => c.firstName === candidate.firstName && c.lastName === candidate.lastName);
    candidatesFromLocalStorage[index] = candidate;
    console.log(candidatesFromLocalStorage)
    localStorage.setItem('Candidate', JSON.stringify(candidatesFromLocalStorage));
    return of();
  }

}
