import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './Components/nav/nav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { VerifersComponent } from './Components/verifers/verifers.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EmployeeHeaderComponent } from './Components/employees/UI/employee-header/employee-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    EmployeesComponent,
    ReportsComponent,
    VerifersComponent,
    AdminComponent,
    EmployeeHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
