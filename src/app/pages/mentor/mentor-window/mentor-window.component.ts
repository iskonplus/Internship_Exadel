import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../../types/candidate';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import {selectAllSkills} from '../../../store/directory/selectors';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-mentor-window',
  templateUrl: './mentor-window.component.html',
  styleUrls: ['./mentor-window.component.scss']
})
export class MentorWindowComponent implements OnInit {


  selectedCandidate$: Observable<Candidate>;
  selectedCandidate: any;
  softSkills$: Observable<any[]>;
  finalAssessment = {};

  constructor(private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    )
  }

  ngOnInit(): void {
  };

  onFormChange(object) {
    this.finalAssessment = object
  }
}
