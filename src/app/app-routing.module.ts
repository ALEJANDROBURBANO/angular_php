import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'add-user', component:AddUserComponent},
  {path: 'edit-user/:id', component:EditUserComponent},
  {path: 'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
