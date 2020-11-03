import { Routes, RouterModule } from "@angular/router";
//
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountComponent } from "./account/account.component";
import { ChargestatusComponent } from "./chargestatus/chargestatus.component";
import { ConfigComponent } from "./config/config.component";
import { HistoryComponent } from "./history/history.component";
import { OperationinfraComponent } from "./operationinfra/operationinfra.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "account", component: AccountComponent },
    { path: "chargestatus", component: ChargestatusComponent },
    { path: "config", component: ConfigComponent },
    { path: "history", component: HistoryComponent },
    { path: "login", component: LoginComponent },
    { path: "operationinfra", component: OperationinfraComponent },
    { path: "report", component: ReportComponent }
];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
