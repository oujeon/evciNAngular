import { NgModule } from "@angular/core";
//
import { BrowserModule } from "@angular/platform-browser";
import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
//
import { AppComponent } from "./app.component";
import { ComponentComponent } from "./components/component.component";
//
import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AccountComponent } from "./components/account/account.component";
import { ChargestatusComponent } from "./components/chargestatus/chargestatus.component";
import { ConfigComponent } from "./components/config/config.component";
import { HistoryComponent } from "./components/history/history.component";
import { OperationinfraComponent } from "./components/operationinfra/operationinfra.component";
import { ReportComponent } from "./components/report/report.component";
//
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
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
  imports: [BrowserModule, Routing, HttpClientModule, FormsModule],

  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
