import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private httpClient: HttpClient) { }

  loadAllSpecializations(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallspecializations', httpOptions);
  }

  loadAllEnglishLevels(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallenglishlevels', httpOptions);
  }

  loadAllCountries(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallcountries', httpOptions);
  }

  loadCitiesByCountryId(id): Observable<any[]> {
    const headers = new HttpHeaders({
      'accept': 'text/plain'
    })
    const httpParams = new HttpParams()
      .set('countryId', id);

    return this.httpClient.get<any>('directory/getallcitiesbycountryid', {headers: headers, params: httpParams});
  }

  loadAllSkills(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallskills', httpOptions);
  }

  loadCountryById(id): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'text/plain'
    })
    const httpParams = new HttpParams()
      .set('countryId', id);

    return this.httpClient.get<any>('directory/getcountrybyid', {headers: headers, params: httpParams})
  }

}
