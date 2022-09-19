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
  { path: 'add-vaccinaion', component: VaccinationCheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
