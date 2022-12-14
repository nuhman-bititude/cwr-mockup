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
import { WorkEntitlementCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/work-entitlement-check/work-entitlement-check.component';
import { VaccinationCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/vaccination-check.component';
import { RsaCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/rsa-check/rsa-check.component';
import { PoliceCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/police-check/police-check.component';
import { WorkingWithChildrenCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/working-with-children-check/working-with-children-check.component';
import { StudyEntitlementCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/study-entitlement-check/study-entitlement-check.component';
import { AddEvidenceComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/add-evidence.component';
import { SubmitCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/submit-check/submit-check.component';
import { AutomatedCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/automated-check/automated-check.component';
import { ManualCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/manual-check.component';
import { PartlyVaccinatedComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/partly-vaccinated/partly-vaccinated.component';
import { MedicalExemptionComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/medical-exemption/medical-exemption.component';
import { PersonalObjectionComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/personal-objection/personal-objection.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './Components/page404/page404.component';

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
    WorkEntitlementCheckComponent,
    VaccinationCheckComponent,
    RsaCheckComponent,
    PoliceCheckComponent,
    WorkingWithChildrenCheckComponent,
    StudyEntitlementCheckComponent,
    AddEvidenceComponent,
    SubmitCheckComponent,
    AutomatedCheckComponent,
    ManualCheckComponent,
    PartlyVaccinatedComponent,
    MedicalExemptionComponent,
    PersonalObjectionComponent,
    Page404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
