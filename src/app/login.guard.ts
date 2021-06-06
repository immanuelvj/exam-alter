  
import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private Router:Router,public appService:AppService) { }
  canActivate(route:ActivatedRouteSnapshot):boolean{
    if(!Cookie.get('authtoken') )
    {
       
           
           return true;
    }
    else{
      this.appService.getuserData(Cookie.get('userId'))
      .subscribe((apiResponse)=>{
        if(apiResponse.data.usertype == 'admin'){
          
          this.Router.navigate(['/admin_dashboard'])
        }else {
          this.Router.navigate(['/dashboard'])
        }
      })
    }
  
  }

}