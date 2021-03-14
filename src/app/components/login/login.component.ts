// import
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Utils from '../utils/utils';
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
    let me = this;
    me.mainLocalData.class.errorMessage1 = false;
    me.mainLocalData.data.userId = Utils.checkUserId(value);
  }
  //
  getUserIdFn(): string {
    let me = this;
    return '';
  }
  //
  setPasswordFn(value): void {
    //
    let me = this;
    me.mainLocalData.class.errorMessage2 = false;
    me.mainLocalData.class.errorMessage3 = false;

    me.mainLocalData.data.password = Utils.checkPassword(value);
  }
  //
  getPasswordFn(): string {
    let me = this;
    return '';
  }
  //
  setRememberIdFn(bln): void {
    //
    let me = this;
    let userId = me.mainLocalData.data.userId;
    if (bln) {
      Utils.setCookie('rememberUserId', userId, 365);
    } else {
      Utils.setCookie('rememberUserId', '', 0);
    }
  }
  //
  getRememberIdFn(): string {
    let me = this;
    return '';
  }
  enter(event) {
    if (event.key === 'Enter') {
      this.doLoginFn();
    }
  }
  //
  doLoginFn(): void {
    let me = this;

    //
    let userId = me.mainLocalData.data.userId;
    let password = me.mainLocalData.data.password;
    //
    if (userId === '') {
      me.mainLocalData.class.errorMessage1 = true;
    }
    if (password === '') {
      me.mainLocalData.class.errorMessage2 = true;
    }
    if (userId === '' || password === '') {
      return;
    }
  }
}
