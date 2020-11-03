import { NgModule } from "@angular/core";
//
import { BrowserModule } from "@angular/platform-browser";
import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
//
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountComponent } from "./account/account.component";
import { ChargestatusComponent } from "./chargestatus/chargestatus.component";
import { ConfigComponent } from "./config/config.component";
import { HistoryComponent } from "./history/history.component";
import { OperationinfraComponent } from "./operationinfra/operationinfra.component";
import { ReportComponent } from "./report/report.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    AccountComponent,
    ChargestatusComponent,
    ConfigComponent,
    HistoryComponent,
    OperationinfraComponent,
    ReportComponent
  ],
  imports: [BrowserModule, Routing, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
