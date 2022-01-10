import { Candidate, Status } from 'src/app/types/candidate';
import { Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() Status: Status
  @Input() candidate: Candidate
  @Input() first: boolean
  @Input() selectedCandidate: Candidate

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
