import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCandidatesList } from '../store/candidates/actions';

@Injectable({
  providedIn: 'root'
})
export class CandidatesResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(loadCandidatesList(null));
    return true;
  }
}

