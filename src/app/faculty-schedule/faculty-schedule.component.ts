
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-faculty-schedule',
  templateUrl: './faculty-schedule.component.html',
  styleUrls: ['./faculty-schedule.component.css']
})
export class FacultyScheduleComponent implements OnInit {
  public notfound = false
  datas = []
  constructor(public AppService:AppService,public Router:Router) { }

  ngOnInit() {
    this.getschedule()
  }

  getschedule = () =>{
    this.AppService.getSchedule()
    .subscribe((apiResponse)=>{
      if(apiResponse.status == '404'){
        this.notfound = true
      }
      else{
        this.notfound = false
        this.datas = apiResponse.data
        console.log(this.datas)
      }
    })
  }

  movetoLogin = () =>{
    this.Router.navigate(['/login'])
  }
}
