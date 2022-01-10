import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserLoginService } from "../services/user-login.service";

const ROLE_TO_PATH_MAP = {
  'techInterviewer': '/techInterviewer',
  'manager': '/manager',
  'mentor': '/mentor',
  'admin': '/admin',
  'form': '/form',
  'recruiter': '/recruiter',
  '': '/'
}

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor (private userLoginService: UserLoginService, private routerService: Router){}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):  boolean | UrlTree {
    const role = this.userLoginService.getRole();
    let rolePath = ROLE_TO_PATH_MAP[role];

    if (state.url === '/'&& !role) {
      rolePath = ROLE_TO_PATH_MAP[''];

    }else if (rolePath === undefined) {
      console.log('Unknown role');
    }

    if (rolePath === state.url) {
      return true;
    }

    return this.routerService.parseUrl(role);
  }
}



