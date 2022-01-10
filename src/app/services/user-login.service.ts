import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  logInURL: string = 'account/Login';
  logOutURL: string = 'account/logout';
  isKeyRole = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  decoded: any;



  activeUser = {
    email: null,
    password: null,
    role: null,
    token: null
  }

  constructor(private http: HttpClient) { }

  postData(userData: any): Observable<any> {

    let userDataJson = JSON.stringify({ ...userData })
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(this.logInURL, userDataJson, httpOptions);
  }

  postLogOut(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
      }),
    };
    return this.http.post(this.logOutURL, httpOptions);
  }

  userRole$ = new Subject<string>()
  userRole = this.userRole$.asObservable()

  saveDataUser(userData: any): any {
    this.activeUser = { ...userData };
  }

  isAuthenticated(): boolean {
    return !!this.activeUser.token;
  }

  getToken() {
    return this.activeUser.token;
  }

  setToken(data: any) {
      this.activeUser.token = data
  }

  setRole(token: string) {
    this.decoded = jwt_decode(token);
    return this.decoded[this.isKeyRole];
  }

  setReloadRole(data: any) {
    this.activeUser.role = data;
  }

  getRole() {
    this.userRole$.next(this.activeUser.role);
    return this.activeUser.role;
  }

  deleteActiveUser() {
    for (var key in this.activeUser) {
      this.activeUser[key] = null;
    }
    localStorage.removeItem('authToken');
  }

}
