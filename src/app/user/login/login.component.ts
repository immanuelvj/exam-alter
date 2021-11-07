import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email
  public password
  public otp
  public otpnumber
  constructor(private toastr: ToastrService,public appService:AppService,public router:Router) {}

  ngOnInit() {
      this.otp = true;
      }
  
  login_enter = (event:any) =>{
    alert(event)
  }

  login = () =>{
    if(!this.email){
      this.toastr.error('missing paramater','Enter Email')
    }
    else if(!this.password){
      this.toastr.error('missing parameter',"Enter Password")
    }
    else{
      let data = {
        email: this.email,
        password: this.password
      }

      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {
          console.log(apiResponse)
          if (apiResponse.status === 200) {
            this.toastr.success('Password verified ! Otp Verification required')
            
            this.otp = false;
//            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('userId', apiResponse.data.data.data.userId);

            Cookie.set('userName', apiResponse.data.data.data.firstName + ' ' + apiResponse.data.data.data.lastName);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)

//            this.router.navigate(['/dashboard']);

          } else {
            this.toastr.error(apiResponse.message)

          
          }

        }, (err) => {
          
          console.log('Internal error')

        });

    // end condition

    }
  }

  otplogin = () => {
    let data = {
      otp:this.otpnumber,
      userId:Cookie.get('userId')
    }
    this.appService.otpFunction(data)
    .subscribe((apiResponse)=>{
      if(apiResponse.status == 200 ){
        Cookie.set('authtoken', apiResponse.data.authToken);
        this.router.navigate(['/dashboard']); 
      } 
      else {
        this.toastr.error(apiResponse.message)

      
      }

    })
  }

  routeToFacSchedule = () =>{
    this.router.navigate(['/faculty_schedule'])
  }

}
