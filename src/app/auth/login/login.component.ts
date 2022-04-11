import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log('form must be submitted')
    this.errorMessage = '';
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: ()=> {                   // when we log in, http resp. will return user, next will be triggered and we will be given the user
        this.router.navigate(['home']); //next will be invoked when s.b. emits value on the stream
      },
      complete: () => {
        console.log('login stream completed');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
