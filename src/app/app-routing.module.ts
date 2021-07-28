import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from "./user/user.component";
import {UserTableComponent} from "./user-table/user-table.component";

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserTableComponent},
  {path: 'user/:id', component: UserComponent},
  {path:'**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
