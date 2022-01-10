import { Candidate } from '../../../types/candidate';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import { selectAllSkills } from '../../../store/directory/selectors';
import { map } from 'rxjs/operators';
import { updateCandidate } from 'src/app/store/candidates/actions';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-recruiter-window',
  templateUrl: './recruiter-window.component.html',
  styleUrls: ['./recruiter-window.component.scss']
})
export class RecruiterWindowComponent implements OnInit {

  selectedCandidate$: Observable<Candidate>;
  softSkills$: Observable<any[]>;
  assessmentsRecruiter = {};
  selectedCandidate: any;

  constructor(private store: Store,
    private notificationService: NotificationService) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.softSkills$ = this.store.select(selectAllSkills).pipe(
      map(skills => skills.filter(skill => skill.type === 0))
    );
    this.selectedCandidate$.subscribe((data) => {
      if (data.assessmentsRecruiter) {
        this.assessmentsRecruiter = { ...data.assessmentsRecruiter }
      } else {
        this.assessmentsRecruiter = {}
      }
    });
  }

  ngOnInit(): void {
  }

  onClick() {
    this.selectedCandidate$.subscribe(candidate => this.selectedCandidate = candidate);
    this.selectedCandidate = { ...this.selectedCandidate, isInterviewedByHr: true, assessmentsRecruiter: this.assessmentsRecruiter };
    this.store.dispatch(updateCandidate({ candidate: this.selectedCandidate }));
    this.notificationService.success('Operation was successfully completed');

    console.log(this.assessmentsRecruiter)









    // localStorage.removeItem('Candidate');
    // localStorage.setItem('Candidate', JSON.stringify(this.selectedCandidate))
    // let id;
    // this.selectedCandidate$.subscribe(candidate => id = candidate.id);
    // const data = {
    //   dateOfInterview: new Date(),
    //   candidateID: id,
    //   marks: [],
    //   comment: this.assessmentsRecruiter['comment']
    // }
    // let result = []
    // for (let key in this.assessmentsRecruiter) {
    //   if (key == 'comment') {
    //     continue;
    //   } else {
    //     result.push({skillID: key, skillLevel: this.assessmentsRecruiter[key]})
    //   }
    //
    // }
    // data.marks.push(result)
    // console.log(data)
    // console.log(JSON.stringify(data))
    // this.assessmentsRecruiter = {}
  }

  onRecruiterFormChange(object) {
    this.assessmentsRecruiter = object
  }

}
