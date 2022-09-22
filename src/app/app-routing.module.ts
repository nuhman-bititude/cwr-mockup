import { Page404Component } from './Components/page404/page404.component';
import { PartlyVaccinatedComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/partly-vaccinated/partly-vaccinated.component';
import { PersonalObjectionComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/personal-objection/personal-objection.component';
import { MedicalExemptionComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/manual-check/medical-exemption/medical-exemption.component';
import { AddEvidenceComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/add-evidence/add-evidence.component';
import { VaccinationCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/vaccination-check.component';
import { DocumentsComponent } from './Components/employees/UI/employee-navs/Components/documents/documents.component';
import { NotesComponent } from './Components/employees/UI/employee-navs/Components/notes/notes.component';
import { CommunicationsComponent } from './Components/employees/UI/employee-navs/Components/communications/communications.component';
import { AllChecksComponent } from './Components/employees/UI/employee-navs/Components/all-checks/all-checks.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { VerifersComponent } from './Components/verifers/verifers.component';
import { SubmitCheckComponent } from './Components/employees/UI/employee-navs/Components/all-checks/vaccination-check/UI/submit-check/submit-check.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: 'checks', component: AllChecksComponent },
      { path: 'communications', component: CommunicationsComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'documents', component: DocumentsComponent },
    ],
  },
  { path: 'reports', component: ReportsComponent },
  { path: 'verifers', component: VerifersComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'vaccination',
    component: VaccinationCheckComponent,
    children: [
      {
        path: 'add-evidence',
        component: AddEvidenceComponent,
      },
      {
        path: 'add-partly-vaccinated',
        component: PartlyVaccinatedComponent,
      },
      {
        path: 'add-medical-exemption',
        component: MedicalExemptionComponent,
      },
      {
        path: 'add-personal-objection',
        component: PersonalObjectionComponent,
      },
      {
        path: 'submit-evidence',
        component: SubmitCheckComponent,
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
