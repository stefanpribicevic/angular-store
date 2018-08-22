import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from "@angular/http";
import { LoginRegisterService } from './login-register.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  registerFormErrors;
  loginFormError;

  constructor(private loginRegisterService: LoginRegisterService, private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });

    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmitLoginForm() {
    this.loginRegisterService.postLogin(this.loginForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('username', this.loginForm.value.username);
        this.headerService.userLoginStatusChanged();
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log('Connection error: ', error);
      });
  }

  onSubmitRegisterForm() {
    this.loginRegisterService.postRegister(this.registerForm.value)
      .subscribe((data: any) => {
        this.registerForm.reset();            
      },
      (error) => this.registerFormErrors = error.error.message);
  }

}
