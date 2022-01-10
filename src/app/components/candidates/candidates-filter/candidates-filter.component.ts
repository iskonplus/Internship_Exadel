import { Status, Specialization } from '../../../types/candidate';
import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-candidates-filter',
  templateUrl: './candidates-filter.component.html',
  styleUrls: ['./candidates-filter.component.scss']
})
export class CandidatesFilterComponent implements OnInit, OnDestroy {

  specializationOptions: { label: string, value: Specialization}[] = [
    { label: 'Front-end', value: 'front-end' },
    { label: 'Back-end', value: 'back-end' },
    { label: 'Business analyst', value: 'business analyst'}
  ];

  statusOptions: {label: string, value: Status}[] = [
    { label: 'Questionable', value: Status.Questionable },
    { label: 'Accepted', value: Status.Accepted },
    { label: 'Declined', value: Status.Declined }
  ];

  @Output() filterChanged = new EventEmitter();

  filterForm = new FormGroup({
    specialization: new FormControl(null),
    status: new FormControl(null)
  });

  filterSubscription: Subscription

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.filterSubscription = this.filterForm.valueChanges.subscribe(value => this.filterChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe()
  }

}
