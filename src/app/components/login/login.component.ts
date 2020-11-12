// import
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Login } from './login';
// Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
// LoginComponent
export class LoginComponent {
  // interface
  login: Login = {
    logo: '../../../assets/logo.jpg',
    userId: '',
    password: '',
    authority: '',
    company: '',
    email: '',
    passwordChangedDate: '',
    userName: '',
    code: '',
    msg: ''
  };
  // constructor
  constructor(private http: HttpClient, private router: Router) { }
  // ngOnInit
  ngOnInit() {
  }
  //
  async fnLogin(value): Promise<any> {
    let am = this;
    // 
    let URL = `http://evci.duckdns.org:9090/v1/login`;
    //userId=neocyon0001&password=neo1234!
    let body = new URLSearchParams();
    body.set('userId', this.login.userId);
    body.set('password', this.login.password);
    //
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
    }
    let res1 = await am.http.post<any>(URL, body.toString(), header).toPromise();
    //
    console.log(res1);
    //   
    if (res1.code === 200) {
      //
      this.login.authority = res1.user.authorities[0].authority;
      this.login.company = res1.user.company;
      this.login.email = res1.user.email;
      this.login.passwordChangedDate = res1.user.passwordChangedDate;
      this.login.userName = res1.user.userName;
      this.login.code = res1.code;
      this.login.msg = res1.msg;
      //
      this.router.navigateByUrl("/dashboard").then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    } else {
      this.login.code = res1.code;
      this.login.msg = res1.msg;
    }
  }
  fnSample: {
    // // 
    // this.checkLogin()
    //   .then((data) => {
    //     am._code = data.code;
    //     if (am._code !== 0) {
    //       this.router.navigateByUrl("/login");
    //     } else {
    //       am.router.navigateByUrl("/dashboard");
    //     }
    //   })
    //   .finally(function () {
    //     // 
    //   });
    // // 
    // this.checkLogin()
    //   .then((data) => {
    //     am._code = data.code;
    //     if (this._code !== 0) {
    //       this.router.navigateByUrl("/login");
    //     } else {
    //       this.router.navigateByUrl("/dashboard");
    //     }
    //   })
    //   .finally(function () {
    //   });
    //     let am = this;
    // let res1 = await am.http
    //   .get<any>(`https://evci.duckdns.org/external/general/time?tz=Asia/Seoul`)
    //   .toPromise();
    // let res2 = await am.http
    //   .get<any>(`https://evci.duckdns.org/v1/setting/my_account`)
    //   .toPromise();
    // return res2;
  }
  //
  setUserId(value): void {
  }
  //
  setPassword(value): void {
  }
}
