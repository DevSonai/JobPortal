import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {NgToastService  } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class secureauth implements CanActivate {
  
  constructor(private auth:AuthService,private router:Router,private toast:NgToastService) {
      
   }
   canActivate():boolean {
     if(this.auth.isloggedin())
     {
      return true;
     }
     else{
      this.toast.error({detail:"ERROR",summary:"Login first"});
      this.router.navigate(['login']);
      return false;
     }
   }
}