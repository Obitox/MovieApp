import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from "rxjs/Subscription";
import {HttpClient} from "@angular/common/http";
import User from "./user/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private login: boolean;
  private signup: boolean;
  private subscribe: Subscription;
  private user: User;

  constructor(private http: HttpClient) {
    this.login = true;
    this.signup = false;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  switchLogin(){
    this.signup = false;
    this.login = true;
  }

  switchSignup(){
    this.login = false;
    this.signup = true;
  }

  signUp(form: any){
    this.user = new User(form.username, form.password, form.email, form.name);
    this.subscribe = this.http.post("user/createAUser", this.user).subscribe( data => {console.log(data)})
  }



}
