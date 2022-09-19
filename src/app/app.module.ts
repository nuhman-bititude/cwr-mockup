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
import { EmployeeProfileComponent } from './Components/employees/UI/employee-profile/employee-profile.component';
import { EmployeeNavsComponent } from './Components/employees/UI/employee-navs/employee-navs.component';
import { AllChecksComponent } from './Components/employees/UI/employee-navs/Components/all-checks/all-checks.component';
import { CommunicationsComponent } from './Components/employees/UI/employee-navs/Components/communications/communications.component';
import { NotesComponent } from './Components/employees/UI/employee-navs/Components/notes/notes.component';
import { DocumentsComponent } from './Components/employees/UI/employee-navs/Components/documents/documents.component';

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
    EmployeeProfileComponent,
    EmployeeNavsComponent,
    AllChecksComponent,
    CommunicationsComponent,
    NotesComponent,
    DocumentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
