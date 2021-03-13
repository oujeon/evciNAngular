// import
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
// LoginComponent
export class LoginComponent {
  // state
  mainLocalData = {
    image: {
      logo: '../../../assets/logo.jpg',
    },
    class: {
      errorMessage1: false,
      errorMessage2: false,
      errorMessage3: false,
    },
    data: {
      userId: null,
      password: null,
      rememberId: false,
    },
  };
  // constructor
  constructor(private http: HttpClient, private router: Router) {
    //
    //
  }
  // ngOnInit
  ngOnInit() {
    //
    //
  }
  //
  setUserIdFn(value): void {
    //
    //
  }
  //
  getUserIdFn(): string {
    let me = this;
    return '';
  }
  //
  setPasswordFn(value): void {
    //
    //
  }
  //
  getPasswordFn(): string {
    let me = this;
    return '';
  }
  //
  setRememberIdFn(value): void {
    //
    //
  }
  //
  getRememberIdFn(): string {
    let me = this;
    return '';
  }
  //
  doLoginFn(): void {
    let me = this;
    me.mainLocalData.class.errorMessage1 = true;
    me.mainLocalData.class.errorMessage2 = true;
    console.log(me.mainLocalData.data);
  }
}
