import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appconstants } from '../Helper/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) {
      
   }
  signup(userobj:any)
  {  
    return this.http.post<any>(`${Appconstants.baseurl}signup`,userobj);
  }
  signin(signinobj:any)
  {
    console.log(signinobj);
  return this. http.post<any>(`${Appconstants.baseurl}user/getlogin`,signinobj);
  }
  savetoken(tokenvaalue:string)
  {
    localStorage.setItem("Token",tokenvaalue);
  }
  gettoken()
  {
    return localStorage.getItem("Token");
  }
  isloggedin():boolean{
    return !!localStorage.getItem("Token");
  }
}
