import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public exam
  public rexam
  public rsexam
  public rssexam

  public schedules
  public scheduleId

  public allschedules

  public examinerId
  public hallNo
  public examinername
  public examslot
  public examinerdepartment
  public examdate
  public Slot
  public Date

  public slot = [{ 'name': '9.00 am - 10.00 am', 'value': '1' }, { 'name': '10.00 am - 11.00 am', 'value': '2' }, { 'name': '11.00 am - 12.00 pm', 'value': '3' }, { 'name': '1.00 pm - 2.00 pm', 'value': '4' }, { 'name': '2.00 pm - 3.00 pm', 'value': '5' }, { 'name': '3.00 pm - 4.00 pm', 'value': '6' }]

  public freeuser  = []

  public reUserId

  public req = []
  public statusreq = []

  constructor(public appService: AppService, public toastr: ToastrService,public router:Router) { }

  ngOnInit() {
    this.exam = true
    this.rexam = false
    this.rsexam = false
    this.rssexam = false
    this.scheduleId = null
    this.getUserSchedule()
    this.getreq()
    this.getstatusreq()
  
  }

  
  logout = () =>{

    this.appService.logout()
    .subscribe((apiResponse)=>{
      if(apiResponse.status == 200){
        this.toastr.success('Logout done !')
        Cookie.delete('authtoken');

        Cookie.delete('receiverId');

        Cookie.delete('receiverName');
        this.router.navigate(['/login'])
        
      }
      else {
        this.toastr.error('Logout failed !')
      }
    })
  }


  getUserSchedule = () =>{
    let data = {
      userId:Cookie.get('userId')
    }
    console.log(data.userId)
    this.appService.userscheduleData(data)
    .subscribe((apiResponse)=>{
      console.log(apiResponse.data)
      this.schedules = apiResponse.data

    })
  }
  

  activate = (data) => {
    if (data == 'exam') {
      this.exam = true
      this.rexam = false
      this.rsexam = false
      this.rssexam = false

    }
    else if (data == 'rexam') {

      this.exam = false
      this.rexam = true
      this.rsexam = false
      this.rssexam = false

    }
    else if (data == 'rsexam') {
      this.exam = false
      this.rexam = false
      this.rsexam = true
      this.rssexam = false
    }
    else if (data == 'rssexam') {
      this.exam = false
      this.rexam = false
      this.rsexam = false
      this.rssexam = true
    }
  }

  
  changevalueschedule = () => {

    for (let i = 0; i < this.schedules.length; i++) {

      if (this.schedules[i].scheduleId == this.scheduleId) {
        console.log(this.scheduleId)
        
        this.examinerId = this.schedules[i].userId
        this.hallNo = this.schedules[i].HallNo
        this.examinername = this.schedules[i].Name
        this.examslot = this.slot[this.schedules[i].Slot - 1]
        this.Slot = this.schedules[i].Slot
        this.examinerdepartment = this.schedules[i].Department
        this.examdate = this.schedules[i].examdate
        this.Date =  this.schedules[i].Date
        this.getfree()
        
      }
    }
  }


  getfree = () =>{
    let data = {
      HallNo:this.hallNo,
      examdate:this.examdate,
      Slot:this.Slot
    }
    this.appService.userfreescheduleData(data)
    .subscribe((apiResponse)=>{
      this.freeuser = apiResponse.data
    })

  }


  sendreq = () =>{
    let  data = {
      scheduleId:this.scheduleId,
      Name:this.examinername,
      Department:this.examinerdepartment,
      HallNo:this.hallNo,
      Date:this.Date,
      examdate:this.examdate,
      userId:this.examinerId,
      Slot:this.Slot,
      senderId:this.examinerId,
      senderName:this.examinername,
      senderDepartment:this.examinerdepartment,
      receiverId:this.reUserId.userId,
      receiverName:this.reUserId.firstName + " " + this.reUserId.lastName,
      receiverDepartment:this.reUserId.department,
      status:`Request sent to ${this.reUserId.firstName} ${this.reUserId.lastName}`,
      level:'faculty'

    }
    
    this.appService.createreqData(data)
    .subscribe((apiResponse)=>{
      if(apiResponse.status == '200'){
        this.toastr.success('Request sent')
        this.getreq()
        this.getstatusreq()
        this.getstatusreq()
      }else {
        this.toastr.error(apiResponse.message)
      }
    })
  }

  getreq = () =>{
    let data = {
      userId:Cookie.get('userId')
    }
    this.appService.reqData(data)
    .subscribe((apiResponse)=>{

      this.req = apiResponse.data

    })
  }

  
  getstatusreq = () =>{
    let data = {
      userId:Cookie.get('userId')
    }
    this.appService.statusreqData(data)
    .subscribe((apiResponse)=>{

      this.statusreq = apiResponse.data

    })
  }


  acceptreq = (data) =>{
    data.status = `Request accepted by ${data.receiverName} , admin approval needed`
    data.level = 'admin'

    this.appService.editreqData(data)
    .subscribe((apiResponse)=>{
      if(apiResponse.status == '200'){
        this.toastr.success('Request sent for admin approval')
        this.getreq()
        this.getstatusreq()
        this.getstatusreq()
        this.getUserSchedule()
      }
      else {
        this.toastr.error(apiResponse.message)
      }
    })
  }

  rejectreq = (data) =>{
    data.status = `Request rejected by ${data.receiverName}`
    data.level = 'rejected'

    this.appService.editreqData(data)
    .subscribe((apiResponse)=>{
      if(apiResponse.status == '200'){
        this.toastr.success('Request is rejected ')
        this.getreq()
        this.getstatusreq()
        this.getstatusreq()
        this.getUserSchedule()
      }
      else {
        this.toastr.error(apiResponse.message)
      }
    })
  }

}
