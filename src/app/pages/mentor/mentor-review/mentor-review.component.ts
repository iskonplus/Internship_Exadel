import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { Candidate } from 'src/app/types/candidate';
import { CandidatesService } from '../../../services/candidates.service'
import { selectSelectCandidate } from '../../../store/candidates/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateCandidate } from 'src/app/store/candidates/actions';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-mentor-review',
  templateUrl: './mentor-review.component.html',
  styleUrls: ['./mentor-review.component.scss']
})
export class MentorReviewComponent implements OnInit {

  candidate: null | Candidate;
  selectedCandidate$: Observable<Candidate>;
  selectedCandidate: any;

  scores = {
    grade: null,
    review: null
  }
  constructor(private store: Store, private mentorService: MentorService, private cadidatesService: CandidatesService,
    private notificationService: NotificationService) {
    this.selectedCandidate$ = this.store.select(selectSelectCandidate);
    this.selectedCandidate$.subscribe((data) => {
      if (data.scores) {
        this.scores = { ...data.scores }
      } else {
        this.scores = { grade: 0, review: '' }
      }
    })
  }

  ngOnInit(): void {
    this.cadidatesService.getSelectedCandidate().subscribe(candidate => {
      this.candidate = candidate
    })
  }


  OnlyNumbersAllowed(event): boolean {
    if (this.scores.grade.length > 0 && this.scores.grade[0] !== '1') return false
    if (this.scores.grade.length > 0 && event.key !== '0') {
      return false
    }
    return /^([0-9]|10)$/.test(event.key) && this.scores.grade.length <= 1
  }

  onSubmit() {
    // this.mentorService.addMentorAssessment(this.candidate.id, this.scores)

    this.selectedCandidate$.subscribe(candidate => this.selectedCandidate = candidate);
    this.selectedCandidate = { ...this.selectedCandidate, scores: this.scores };
    this.store.dispatch(updateCandidate({ candidate: this.selectedCandidate }))
    this.notificationService.success('Operation was successfully completed');
  }

}
