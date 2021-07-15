import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  public email: any;
  
  constructor(
    public Toastr: ToastrService,
    public AppService: AppService,
    public Router:Router
  ) {

  }

  ngOnInit() {
  }
  
  routeToFacSchedule(){

  }

  //reset functionality for UserName and 
  reset = () => {
    
    if (!this.email) {
      this.Toastr.error('Enter registered email ')
    }
      else {

        let data = {
          email: this.email
        }
        this.AppService.getPasswordRecover(data)
          .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.Toastr.success('Success , Link sent to registered Email !')
          
            }
            else {
              this.Toastr.error(apiResponse.message)
              
            }
          }, (err) => {
            console.log("tech")
          //this.Router.navigate(['/technical'])
          })

      }
    }
  }



