import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  public password: any;
  public confirmpassword: any;
  public userId: any;
  public authToken: any;
  constructor(
    public ActivatedRoute: ActivatedRoute,
    public Router: Router,
    public AppService: AppService,
    public Toastr: ToastrService,

  ) { }

  ngOnInit() {
    //ger userid and authtoken from link
    this.userId = this.ActivatedRoute.snapshot.paramMap.get('userId')
    this.authToken = this.ActivatedRoute.snapshot.paramMap.get('authToken')

  }

  routeToFacSchedule(){

  }
  //reset password
  passwordreset = () => {
    console.log(this.userId)
    console.log(this.authToken)
    if (!this.password) {
      this.Toastr.error('Enter Password')
    }
    else if (!this.confirmpassword) {
      this.Toastr.error('Enter Confirm Password')
    }
    else if (this.password != this.confirmpassword) {
      this.Toastr.error('Password does not match')
    }
    else {
      let data = {
        userId: this.userId,
        password: this.password,
        authToken: this.authToken
      }
      this.AppService.setPasswordRecover(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status === 200) {
            this.Toastr.success('Hurray ! reset done ')
            setTimeout(() => {
              this.Router.navigate(['/login']);
            }, 1000);
          }
          else {
            this.Toastr.error(apiResponse.message)
          }
        }, (err) => {
          console.log(err)
          //this.Router.navigate(['/technical'])
        })
    }
  }

}
