import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenovationitemComponent } from './renovationitem/renovationitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'renovationitem', component: RenovationitemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
