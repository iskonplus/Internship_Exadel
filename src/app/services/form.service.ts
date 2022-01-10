import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class FormService {

  dataIntern: object = {}

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveDataIntern(dataIntern: object): any {
    this.dataIntern = dataIntern;

    if (!localStorage.getItem('Candidate')) {
      localStorage.setItem('Candidate', JSON.stringify([dataIntern]));

    } else {
      const candidateLocalStorage = JSON.parse(localStorage.getItem('Candidate'));
      candidateLocalStorage.push(dataIntern);

      localStorage.setItem('Candidate', JSON.stringify(candidateLocalStorage));
    }
  }

  postData(userData): Observable<any> {

    const userDataJson = JSON.stringify({...userData});

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      }),
    };

    return this.httpClient.post('api/candidate/registercandidate', userDataJson, httpOptions);
  }

}
