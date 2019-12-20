import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateuserComponent} from './createuser/createuser.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {ListusersComponent} from './listusers/listusers.component';
import {CreateuserpasswordComponent} from './createuserpassword/createuserpassword.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MyLayoutComponent} from './my-layout/my-layout.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createNewUser', component: CreateuserpasswordComponent},
  {path: 'createUser', component: CreateuserComponent},
  {path: 'updateUser', component: UpdateuserComponent},
  {path: 'listUsers', component: ListusersComponent},
  {path: 'uploadImage', component: ImageUploadComponent},
  {path: 'myProfile', component: MyLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
