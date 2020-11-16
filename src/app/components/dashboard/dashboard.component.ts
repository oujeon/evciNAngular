import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
//
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html"
})
//
export class DashboardComponent implements OnInit {
  //
  constructor(private http: HttpClient,) { }
  public ngOnInit() {
  }
  //
  async fnLogOut(): Promise<any> {
    let am = this;
    // 
    let URL = `http://evci.duckdns.org:9090/v1/logout`;
    //
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    }
    let res = await am.http.get<any>(URL, header).toPromise();
    //
    if (res.code === 200) {
      window.location.href = "http://localhost:4200";
    }
  }
}
