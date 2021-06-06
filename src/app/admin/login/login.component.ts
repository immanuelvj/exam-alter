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
  constructor(private toastr: ToastrService,public appService:AppService,public router:Router) {}

  ngOnInit() {

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

      this.appService.adminsigninFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            this.toastr.success('Login Succesful')

            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('userId', apiResponse.data.userDetails.userId);

            Cookie.set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)

            this.router.navigate(['/admin_dashboard']);
            

          } else {
            this.toastr.error(apiResponse.message)
          
          }

        }, (err) => {
          
          console.log('Internal error')

        });

    // end condition

    }
  }

  routeToFacSchedule = () =>{
    this.router.navigate(['/faculty_schedule'])
  }

}
