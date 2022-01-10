import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectSelectCandidate} from '../../store/candidates/selectors';

@Component({
  selector: 'app-recruiter-assessment',
  templateUrl: './recruiter-assessment.component.html',
  styleUrls: ['./recruiter-assessment.component.scss']
})
export class RecruiterAssessmentComponent implements OnInit {

  selectedCandidate$: Observable<any>;
  @Input() selectedCandidate: any;
  activeUser: string
  @Input() assessmentsRecruiter
  @Input() softSkills
  @Output() changingForm = new EventEmitter<object>()
  constructor(private userLoginService: UserLoginService, private store: Store) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);

  }

  ngOnInit(): void {
    this.activeUser = this.userLoginService.activeUser.role
  }

  onChange() {
    this.changingForm.emit(this.assessmentsRecruiter)
  }

  handler(event, id) {

    return /^([0-4])$/.test(event.key) && !this.assessmentsRecruiter[id]
  }
}
