import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  public user: any;
  public date:Date=new Date();
  constructor(private router: Router, private api: ApiService) {

  }
  ngOnInit() {
    const mytoken = localStorage.getItem("Token")
    this.api.getallcandidate(mytoken).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        if (err.status == 403) {
          alert("You are not authorized");
        }
        else {
          alert(err?.err.message);
        }

      }
    })
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
