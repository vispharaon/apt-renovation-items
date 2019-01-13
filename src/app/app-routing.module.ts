import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenovationitemComponent } from './renovationitem/renovationitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RenovationItemDetailComponent } from './renovation-item-detail/renovation-item-detail.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RenovationItemDetailComponent },
  { path: 'renovationitem', component: RenovationitemComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
