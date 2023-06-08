import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from 'src/app/Helper/formvalidator';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = 'password';
  loginform!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private auth:AuthService,
    private router:Router) {
    this.loginform = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onSubmit() {
    if (this.loginform.valid) {
      this.auth.signin(this.loginform.value).subscribe({
        next :(res)=>
        {
          this.auth.savetoken(res.token);
          this.loginform.reset();
          this.router.navigate(['dashboard']);
        },
        error :(err)=>
        {
          alert(err?.error.message);
        }
      } )
    }
    else {
      validateForms.validateallformfields(this.loginform);
      alert("form is not valid");
    }
  }
  
}
