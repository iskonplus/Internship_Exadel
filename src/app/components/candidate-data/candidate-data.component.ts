import { Candidate } from '../../types/candidate';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCountyById} from '../../store/directory/selectors';
import {loadCountryById} from '../../store/directory/actions';

@Component({
  selector: 'app-candidate-data',
  templateUrl: './candidate-data.component.html',
  styleUrls: ['./candidate-data.component.scss']
})
export class CandidateDataComponent implements OnInit {

  @Input() selectedCandidate: any;
  country$: Observable<any>;

  constructor(private store: Store) {
    this.country$ = this.store.select(selectCountyById)
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountryById({ countryId: this.selectedCandidate.country }))
  }

}
