import {CandidatesFilter, Status} from '../../types/candidate';
import { Candidate } from '../../types/candidate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCandidatesList, selectCandidatesListLoading } from '../../store/candidates/selectors';
import { loadCandidatesList } from '../../store/candidates/actions';
import { UserLoginService } from '../../services/user-login.service';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidatesList$: Observable<any[]>;
  candidatesListLoading$: Observable<boolean>;
  pageOfCandidates: any[];
  candidatesList: any;
  // length: number;
  activeUserRole: string;
  startItem: number = 0;
  pageItems: number = 7;
  @ViewChild(CandidatesListComponent) list: CandidatesListComponent

  constructor(private store: Store, private userLoginService: UserLoginService, private candidatesService: CandidatesService) {
    this.candidatesList$ = this.store.select(selectCandidatesList);
    this.candidatesListLoading$ = this.store.select(selectCandidatesListLoading);
  }

  ngOnInit(): void {

    const candidatesFromLocalStorage = this.candidatesService.getCandidatesFromLocalStorage();

    if (localStorage['Candidate']) {
      this.candidatesList$.subscribe(candidates => {
        this.candidatesList = [...candidates, ...candidatesFromLocalStorage]
      });
    } else {
      this.candidatesList$.subscribe(candidates => {
        this.candidatesList = candidates
      });
    }

    this.activeUserRole = this.userLoginService.activeUser.role;
    // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(this.startItem, this.pageItems));
    this.pageOfCandidates = this.candidatesList.slice(this.startItem, this.pageItems)
  }

  onFilterChange(filterValue: CandidatesFilter) {
    this.list.dataSource.paginator.firstPage();
    this.store.dispatch(loadCandidatesList({ filters: filterValue }));
  }

  onPageChange(object) {
    let length;
    const startIndex = object.pageIndex * object.pageSize;
    length = this.candidatesList.length;
    let endIndex = startIndex + object.pageSize;
    if (endIndex > length) {
      endIndex = length;
    }

    this.pageOfCandidates = this.candidatesList.slice(startIndex, endIndex);
    // this.candidatesList$.subscribe(response => this.pageOfCandidates = response.slice(startIndex, endIndex))
  }

}
