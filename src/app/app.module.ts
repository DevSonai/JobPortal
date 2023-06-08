import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup'
import { TokenInterceptor } from './shared/token.interceptor';
import { SalaryconversionPipe } from './Helper/salaryconversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SalaryconversionPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptor,
   multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
