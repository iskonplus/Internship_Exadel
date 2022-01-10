import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  subtasks = [
    { id: 1, name: 'Javascript', isActive: true },
    { id: 2, name: '.Net', isActive: true },
    { id: 3, name: 'Business analyst', isActive: true },
    { id: 4, name: 'Java', isActive: false },
    { id: 5, name: 'С++', isActive: false },
  ]


  isRole = [
    'Recruiter',
    'TechInterviewer',
    'Mentor',
    'Manager',
    'Admin'
  ];

  // newUser = {};
  // delUser = '';

  private adminStartPage: BehaviorSubject<string>

  constructor(private http: HttpClient) {
    this.adminStartPage = new BehaviorSubject<string>("Home");
  }

  getSelectedPage(): Observable<string> {
    return this.adminStartPage.asObservable();
  }

  setSelectedPage(value: any) {
    this.adminStartPage.next(value);
  };


  postSettingRequest(data: any, url: string): Observable<any> {
    let dataJson = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json',
      }),
    };

    // console.log(dataJson);
    return this.http.post(url, dataJson, httpOptions); // -------- do not delete
  }


  deleteSettingRequest(data: any, url: string): Observable<any> {
    let dataJson = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json',
      }),
    };

    console.log(dataJson);
    return this.http.post(url, dataJson, httpOptions); // -------- do not delete
  }

  getSettingRequest(url: string): Observable<any> {
    return this.http.get(url); // -------- do not delete
  }

  setSubtaskLocalStorage(data: any[]) {
    localStorage.setItem('Subtask', JSON.stringify(data));
  }

  getSubtaskLocalStorage() {
    this.subtasks = JSON.parse(localStorage.getItem('Subtask'));
  }



  // saveNewUser(data: Object) {
  //   this.newUser = data;
  //   console.log(this.newUser);
  // }

  // deleteUser(data: string) {
  //   this.delUser = data;
  //   console.log(this.delUser);
  // }
}
