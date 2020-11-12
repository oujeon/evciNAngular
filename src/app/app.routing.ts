import { Routes, RouterModule } from "@angular/router";
//
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AccountComponent } from "./components/account/account.component";
import { ChargestatusComponent } from "./components/chargestatus/chargestatus.component";
import { ConfigComponent } from "./components/config/config.component";
import { HistoryComponent } from "./components/history/history.component";
import { OperationinfraComponent } from "./components/operationinfra/operationinfra.component";
import { ReportComponent } from "./components/report/report.component";
//
const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "account", component: AccountComponent },
    { path: "chargestatus", component: ChargestatusComponent },
    { path: "config", component: ConfigComponent },
    { path: "history", component: HistoryComponent },
    { path: "operationinfra", component: OperationinfraComponent },
    { path: "report", component: ReportComponent }
];
//
export const Routing = RouterModule.forRoot(routes, { useHash: true });
