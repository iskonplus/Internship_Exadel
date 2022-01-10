import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  loadAllCountries,
  loadAllEnglishLevels,
  loadAllSkills,
  loadAllSpecializations,
} from '../store/directory/actions';

@Injectable({
  providedIn: 'root'
})
export class DirectoryResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(loadAllSpecializations());
    this.store.dispatch(loadAllEnglishLevels());
    this.store.dispatch(loadAllCountries());
    this.store.dispatch(loadAllSkills());
    return true
  }
}
