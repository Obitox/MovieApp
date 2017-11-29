import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: boolean;
  private signup: boolean;

  constructor() {
    this.login = true;
    this.signup = false;
  }

  ngOnInit() {
  }

  switchLogin(){
    this.signup = false;
    this.login = true;
  }

  switchSignup(){
    this.login = false;
    this.signup = true;
  }

  check(form: any){
    console.log(form)
  }

}
