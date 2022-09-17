import { EmployeesComponent } from './Components/employees/employees.component';
import { NgModule, Component } from '@angular/core';
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
  },
  { path: 'reports', component: ReportsComponent },
  { path: 'verifers', component: VerifersComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
