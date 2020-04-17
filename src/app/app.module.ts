import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AlertModule} from 'ngx-bootstrap';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {CreateuserComponent} from './createuser/createuser.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {ListusersComponent} from './listusers/listusers.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateuserpasswordComponent} from './createuserpassword/createuserpassword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalService} from './global.service';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MyLayoutComponent } from './my-layout/my-layout.component';
import { CreateinvitationComponent } from './createinvitation/createinvitation.component';
import { ViewinvitationComponent } from './viewinvitation/viewinvitation.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateuserComponent,
    UpdateuserComponent,
    ListusersComponent,
    CreateuserpasswordComponent,
    TreeViewComponent,
    DatabaseViewComponent,
    ImageUploadComponent,
    MyLayoutComponent,
    CreateinvitationComponent,
    ViewinvitationComponent,
    ViewcontactsComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
