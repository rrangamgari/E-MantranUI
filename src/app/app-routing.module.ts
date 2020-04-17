import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateuserComponent} from './createuser/createuser.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {ListusersComponent} from './listusers/listusers.component';
import {CreateuserpasswordComponent} from './createuserpassword/createuserpassword.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MyLayoutComponent} from './my-layout/my-layout.component';
import {CreateinvitationComponent} from './createinvitation/createinvitation.component';
import {ViewinvitationComponent} from './viewinvitation/viewinvitation.component';
import {ViewcontactsComponent} from './viewcontacts/viewcontacts.component';
import {WelcomeComponent} from "./welcome/welcome.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createNewUser', component: CreateuserpasswordComponent},
  {path: 'createEvent', component: CreateinvitationComponent},
  {path: 'updateEvent', component: CreateinvitationComponent},
  {path: 'viewContacts', component: ViewcontactsComponent},
  {path: 'viewEvents', component: ViewinvitationComponent},
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
