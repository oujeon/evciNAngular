import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
//
import { AppService } from './app.service';
//
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
//
export class AppComponent implements OnInit {
  //
  major = 1;
  minor = 23;
  // constructor
  constructor(private router: Router, private http: HttpClient, private _app: AppService) { }
  // ngOnInit
  public ngOnInit() {
    let am = this;
    // 현재 router 경로
    am.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
    // 로그인 체크
    am.http.get<any>(`http://evci.duckdns.org:9090/v1/setting/my_account`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    })
      .subscribe(res => {
        // 

        console.log(res);
        console.log(res);
        console.log(res);
        console.log(res);
        // 
        if (res.code === 0) {
          this.router.navigateByUrl("/dashboard").then(e => {
            if (e) {
              console.log(e);
            } else {
              console.log(e);
            }
          });
        } else {
          this.router.navigateByUrl("/login").then(e => {
            if (e) {
              console.log(e);
            } else {
              console.log(e);
            }
          });
        }
      })
    //
  }
}
