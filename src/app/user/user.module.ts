import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import {RouterModule,Router} from '@angular/router';

import { ResetComponent } from './reset/reset.component';
import { PasswordChangeComponent } from './password-change/password-change.component';


@NgModule({
  declarations: [LoginComponent,  ResetComponent, PasswordChangeComponent],
  imports: [
    CommonModule,

    FormsModule,
    RouterModule.forChild([

      {path:'reset',component:ResetComponent},
      {path:'passwordChange/:userId/:authToken',component:PasswordChangeComponent}
    ]),
    
  ],
  
})
export class UserModule { }