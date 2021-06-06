import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public create
  public exam
  public details
  public examdetails
  public staff
  public departments = [{ 'name': 'Computer Science and Engineering', 'value': 'Computer Science and Engineering' }, { name: 'Electronics and Engineering', 'value': 'Electronics and Engineering' }]
  public usertypes = [{ 'name': 'Faculty', 'value': 'faculty' }, { 'name': 'Admin', 'value': 'admin' }, { 'name': 'Department Controller of Examination', 'value': 'dcoe' },]
  public slot = [{ 'name': '9.00 am - 10.00 am', 'value': '1' }, { 'name': '10.00 am - 11.00 am', 'value': '2' }, { 'name': '11.00 am - 12.00 pm', 'value': '3' }, { 'name': '1.00 pm - 2.00 pm', 'value': '4' }, { 'name': '2.00 pm - 3.00 pm', 'value': '5' }, { 'name': '3.00 pm - 4.00 pm', 'value': '6' }]


  public firstName
  public lastName
  public usertype
  public department
  public password
  public email
  public mobileNumber

  public userId
  public edit
  public users = []


  public examslot
  public examedit
  public examinerId
  public examinername
  public examinerdepartment
  public hallNo
  public examdate
  public schedules
  public scheduleId

  public userChange = []

  public scheduleChange = []

  constructor(public appService: AppService, public toastr: ToastrService,public router:Router) { }

  ngOnInit() {

    this.getallUser()
    this.getallSchedule()
    this.create = true
    this.edit = false
    this.userId = null
    this.examslot = null
    this.examedit = false
    this.scheduleId = null
    this.department = null
    this.usertype = null
    this.examinerId = null


  }

  
  addId(id){
    
    if (this.userChange.includes(id)){
        var index = this.userChange.indexOf(id)
        if (index > -1) {
          this.userChange.splice(index, 1);
        }
        
    }else{
    this.userChange.push(id)  
    }
   
  }

  
  addsId(id){
    
    if (this.scheduleChange.includes(id)){
        var index = this.scheduleChange.indexOf(id)
        if (index > -1) {
          this.scheduleChange.splice(index, 1);
        }
        
    }else{
    this.scheduleChange.push(id)  
    }
   
  }


  getallUser = () => {

    this.appService.getalluser()
      .subscribe((apiResponse) => {
        this.users = apiResponse.data

      })

  }

  getallSchedule = () => {

    this.appService.getSchedule()
      .subscribe((apiResponse) => {
        this.schedules = apiResponse.data

      })

  }

  changevalue = () => {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId == this.userId) {
        console.log(this.users[i])
        this.firstName = this.users[i].firstName
        this.lastName = this.users[i].lastName
        this.email = this.users[i].email
        this.password = this.users[i].password
        this.mobileNumber = this.users[i].mobileNumber
        this.department = this.users[i].department
        this.usertype = this.users[i].usertype
        this.edit = true
      }
    }
  }

  changevalueexaminer = () => {

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId == this.examinerId) {

        this.examinername = this.users[i].firstName + " " + this.users[i].lastName
        this.examinerdepartment = this.users[i].department

      }
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

        this.examinerdepartment = this.schedules[i].Department
        this.examdate = this.schedules[i].examdate
        this.examedit = true
      }
    }
  }

  activate = (data) => {
    if (data == 'create') {
      this.create = true
      this.exam = false
      this.details = false
      this.staff = false
      this.examdetails = false
    }
    else if (data == 'exam') {
      this.create = false
      this.exam = true
      this.details = false
      this.staff = false
      this.examdetails = false
    }
    else if (data == 'details') {
      this.create = false
      this.exam = false
      this.details = true
      this.staff = false
      this.examdetails = false
    }
    else if (data == 'examdetails') {
      this.create = false
      this.exam = false
      this.examdetails = true
      this.details = false
      this.staff = false
    }
    else if (data == 'staff') {
      this.create = false
      this.exam = false
      this.details = false
      this.staff = true
      this.examdetails = false
    }
  }


  createUser = () => {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      department: this.department,
      usertype: this.usertype,
      mobileNumber: this.mobileNumber,
      password: this.password,
      userId: this.userId
    }
    if (this.edit == true) {
      this.appService.edituserData(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status == 200) {
            this.toastr.success('User Edited')
            console.log(data)
            this.firstName = ''
            this.lastName = ''

            this.password = ''
            this.mobileNumber = ''
            this.email = ''
            this.usertype = null
            this.department = null
            this.edit = false
            this.userId = null
            this.getallUser()


          }
          else {
            this.toastr.error(apiResponse.message)
            this.firstName = ''
            this.lastName = ''
            this.password = ''
            this.mobileNumber = ''
            this.email = ''
            this.usertype = null
            this.department = null
            this.edit = false
            this.getallUser()


          }
        })
    } else {
      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status == 200) {
            this.toastr.success('User created !')
            this.firstName = ''

            this.lastName = ''
            this.password = ''
            this.mobileNumber = ''
            this.email = ''
            this.usertype = null
            this.department = null
            this.edit = false
            this.getallUser()


          }
          else {
            this.toastr.error(apiResponse.message)
            this.firstName = ''
            this.lastName = ''
            this.password = ''
            this.mobileNumber = ''
            this.email = ''
            this.usertype = null
            this.department = null
            this.edit = false
            this.getallUser()

          }
        })

    }

  }


  createExam = () => {
    let data = {
      scheduleId: this.scheduleId,
      Name: this.examinername,
      userId: this.examinerId,
      Department: this.examinerdepartment,
      Date: this.examdate + " " + this.examslot.name,
      HallNo: this.hallNo,
      Slot: this.examslot.value,
      examdate: this.examdate,
    }

    if (this.examedit == false) {
      this.appService.createScheduleData(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status == '200') {
            this.toastr.success('Exam Schedule Created')
            this.getallSchedule()
            this.examinername = ''
            this.examinerId = null
            this.examinerdepartment = null
            this.examdate = ''
            this.examslot = null
            this.hallNo = ''

            this.examedit = false
            this.getallSchedule()

          }
          else {
            this.toastr.error(apiResponse.message)
            this.examinername = ''
            this.examinerId = null
            this.examinerdepartment = null
            this.examdate = ''
            this.examslot = null
            this.hallNo = ''

            this.examedit = false

            this.getallSchedule()


          }
        })
    } else {
      console.log(data)
      this.appService.editScheduleData(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status == 200) {
            this.toastr.success('Exam Schedule Edited ')
            this.getallSchedule()
            this.scheduleId = null
            this.examinername = ''
            this.examinerId = null
            this.examinerdepartment = null
            this.examdate = ''
            this.examslot = null
            this.hallNo = ''

            this.examedit = false
            this.getallSchedule()

          }
          else {
            this.toastr.error(apiResponse.message)
            this.examinername = ''
            this.examinerId = null
            this.examinerdepartment = null
            this.examdate = ''
            this.examslot = null
            this.hallNo = ''
            this.scheduleId = null
            this.examedit = false
            this.getallSchedule()

          }
        })


    }


  }

  deleteUser = () =>{
    let data = {
      userId:this.userChange
    }

    this.appService.deleteuserData(data)

    .subscribe((apiResponse)=>{
      if(apiResponse.status == 200){
        this.toastr.success('Users Deleted')
      }
      this.getallUser()
      this.userChange = []
    })
  }

  
  deleteSchedule = () =>{
    let data = {
      scheduleId:this.scheduleChange
    }

    this.appService.deletescheduleData(data)

    .subscribe((apiResponse)=>{
      if(apiResponse.status == 200){
        this.toastr.success('Schedules Deleted')
      }
      this.getallSchedule()
      this.scheduleChange = []
    })
  }


  logout = () =>{

    this.appService.logout()
    .subscribe((apiResponse)=>{
      if(apiResponse.status == 200){
        this.toastr.success('Logout done !')
        Cookie.delete('authtoken');

        Cookie.delete('receiverId');

        Cookie.delete('receiverName');
        this.router.navigate(['/admin'])
        
      }
      else {
        this.toastr.error('Logout failed !')
      }
    })
  }

}
