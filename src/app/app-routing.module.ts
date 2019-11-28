import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateuserComponent} from './createuser/createuser.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {ListusersComponent} from './listusers/listusers.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createUser', component: CreateuserComponent},
  {path: 'updateUser', component: UpdateuserComponent},
  {path: 'listUsers', component: ListusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
