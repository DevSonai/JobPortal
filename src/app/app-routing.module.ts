import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { UserdashboardComponent } from './Home/userdashboard/userdashboard.component';
import { secureauth } from './shared/secureauth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'dashboard',component:UserdashboardComponent,canActivate:[secureauth]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  DashboardComponent,
  UserdashboardComponent,
  RegisterComponent,
  LoginComponent
]
