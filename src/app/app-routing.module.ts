import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateuserComponent} from './createuser/createuser.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LoginComponent

  },
  {
    path: 'login', component: LoginComponent

  },
  {
    path: 'createUser', component: CreateuserComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
