import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForms from 'src/app/Helper/formvalidator';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  type:string="password";
  registerform!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService)
  {
    this.registerform=this.fb.group(
      {
        Name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      age:['',Validators.required],
      role:['',Validators.required],
      gender:['',Validators.required]
    }
    )

  }
  ngOnInit(): void {

  }
  onSubmit() {
    if (this.registerform.valid) {
      console.log(this.registerform.value)
      this.auth.signup(this.registerform.value).subscribe({
        next:(res)=>
        {
          alert('candidate registered');
        },
         error:(err) =>
         {
          alert(err?.error.message);
         }
      })
    }
    else {
      validateForms.validateallformfields(this.registerform);
      alert("form is not valid");
    }
  }
}
