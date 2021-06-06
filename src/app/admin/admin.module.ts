import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginGuardService } from '../login.guard';
import { RouteGuardService} from '../route.guard';



@NgModule({
  declarations: [LoginComponent,AdmindashboardComponent],
  imports: [
    CommonModule,

    FormsModule,
    RouterModule.forChild([
        {path:'admin',component:LoginComponent,canActivate:[LoginGuardService]},
        {path:'admin_dashboard',component:AdmindashboardComponent,canActivate:[RouteGuardService]}

    ]),
    
  ],

  providers:[LoginGuardService,RouteGuardService]
  
})
export class AdminModule { }