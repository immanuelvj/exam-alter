import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppService } from './app.service';
import { FacultyScheduleComponent } from './faculty-schedule/faculty-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FacultyScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component:HomeComponent, pathMatch: 'full'},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path:'faculty_schedule',component:FacultyScheduleComponent},
      {path:'dashboard',component:DashboardComponent},
      
      
    ]),
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
