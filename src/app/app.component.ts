import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
//
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  _code: any = 0;

  //
  constructor(private router: Router, private http: HttpClient) { }
  //
  public ngOnInit() {
    let me = this;

    console.log("1. ngOnInit 을 지난 간다.");
    // 현재 router 경로
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
    // 세션이 있는 경우
    this.checkLogin()
      .then((data) => {
        console.log("2. inside :", this._code);
        console.log("3. data :", data);

        console.log("1 me._code : ", me._code);
        me._code = data.code;
        console.log("2 me._code : ", me._code);

        if (me._code !== 0) {
          console.log("4. login 을 지난 간다.");
          this.router.navigateByUrl("/login");
        } else {
          console.log("5. dashboard를 지난 간다.");
          me.router.navigateByUrl("/dashboard");
        }
      })
      .finally(function () {
        //
        console.log("6. dddd");
        console.log("6. this._code : ", me._code);
      });

    console.log("this.checkLogin 사이 !");
    // 세션이 있는 경우
    this.checkLogin()
      .then((data) => {
        console.log("22. inside :", this._code);
        console.log("33. data :", data);

        console.log("1 me._code : ", me._code);
        me._code = data.code;
        console.log("2 me._code : ", me._code);

        if (this._code !== 0) {
          console.log("44. login 을 지난 간다.");
          this.router.navigateByUrl("/login");
        } else {
          console.log("55. dashboard를 지난 간다.");
          this.router.navigateByUrl("/dashboard");
        }
      })
      .finally(function () {
        console.log("66. dddd");
      });
  }

  // 로그인 체크
  public async checkLogin(): Promise<any> {
    let me = this;
    console.log("1-2. checkLogin");

    //   public async getData(): Promise<Data> {
    //     return await this.http.get<Data>('{{ request uri }}').toPromise();
    //     //or return await this.http.get('{{ request uri }}').toPromise() as Data;
    // }

    let res1 = await this.http
      .get<any>(`https://evci.duckdns.org/external/general/time?tz=Asia/Seoul`)
      .toPromise();

    let res2 = await this.http
      .get<any>(`https://evci.duckdns.org/v1/setting/my_account`)
      .toPromise();

    return res2;
  }
}
