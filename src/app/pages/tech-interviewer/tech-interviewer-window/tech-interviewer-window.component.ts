import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import { selectAllSkills } from '../../../store/directory/selectors';
import { map } from 'rxjs/operators';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-tech-interviewer-window',
  templateUrl: './tech-interviewer-window.component.html',
  styleUrls: ['./tech-interviewer-window.component.scss']
})
export class TechInterviewerWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  selectedCandidate: any;
  softSkills$: Observable<any[]>;
  assessmentsTech = {};

  constructor(private store: Store,
    private notificationService: NotificationService) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    )
  }

  ngOnInit(): void {
  }

  onClick() {
    this.selectedCandidate$.subscribe(candidate => this.selectedCandidate = candidate);
    this.selectedCandidate = { ...this.selectedCandidate, isInterviewedByTech: true, assessmentsTech: this.assessmentsTech };
    const candidatesFromLocalStorage = JSON.parse(localStorage.getItem('Candidate'));
    const index = candidatesFromLocalStorage.findIndex(candidate => candidate.firstName === this.selectedCandidate.firstName && candidate.lastName === this.selectedCandidate.lastName);
    candidatesFromLocalStorage[index] = this.selectedCandidate;
    localStorage.setItem('Candidate', JSON.stringify(candidatesFromLocalStorage));
    this.notificationService.success('Operation was successfully completed');
  }

  onFormChange(object) {
    this.assessmentsTech = object
  }
}
