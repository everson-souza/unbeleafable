import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent {


  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]);
  name = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  hide = true;

  User: any;
  Password: any;

  constructor(private LoginService: LoginService,
              private Route: Router) {
  }

  AfterViewInit() {
  }

  OnDestroy() {
  }

  OnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'This is not a valid email' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'Please enter your password';
    }

    return this.email.hasError('password') ? 'This is not a valid password' : '';
  }

  async Signup() {  
  
    let email = this.email.value? this.email.value : '';
    let password = this.password.value? this.password.value : '';
    let firstname = this.name.value? this.name.value : '';
    
    const _Retorno = await this.LoginService.Register(email, password, firstname);
    if (_Retorno && _Retorno.UserId)
        this.Route.navigateByUrl("/home");
  }

}
