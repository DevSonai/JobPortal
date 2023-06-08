import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appconstants } from '../Helper/Constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getallcandidate(userobj: any) {
    return this.http.get<any>(`${Appconstants.baseurl}candidate/getallcandidate`, userobj);
  }
}
