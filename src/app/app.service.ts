import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HttpClient,HttpParams} from '@angular/common/http';



@Injectable()
export class AppService {

  private url = 'http://localhost:3000';

  constructor(
    public http: HttpClient
  ) {



  } // end constructor  


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  
  public signupFunction(data): Observable<any> {


    return this.http.post(`${this.url}/api/v1/users/signup`, data);
  } // end of signinFunction function.



  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.



  public adminsigninFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/adminlogin`, params);
  } // end of signinFunction function.


  public logout(): Observable<any> {
    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))
      .set('userId', Cookie.get('userId'))
    return this.http.post(`${this.url}/api/v1/users/logout`, params);
  } // end logout function

  public getSchedule():Observable<any>{
    return this.http.get(`${this.url}/api/v1/schedule/view/all`)
  }

  public getPasswordRecover(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
    return this.http.post(`${this.url}/api/v1/users/recoverPassword`, params);
  }

  //set Password Email
  public setPasswordRecover(data): Observable<any> {
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('authToken', data.authToken)
      .set('password', data.password)
    return this.http.post(`${this.url}/api/v1/users/resetPassword`, params);

  }

  public getalluser(): Observable<any> {
    return this.http.get(`${this.url}/api/v1/users/view/all`);
  }

  public getuserData(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/users/${data}/details`);
  }

  public edituserData(data): Observable<any> {
    return this.http.put(`${this.url}/api/v1/users/${data.userId}/edit`,data);
  }

  public deleteuserData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/delete`,data);
  }

  
  public deletescheduleData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/schedule/delete`,data);
  }

  
  public userscheduleData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/schedule/user`,data);
  }
  
  public userfreescheduleData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/schedule/freeuser`,data);
  }

  
  public createScheduleData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/schedule/create`,data);
  }

  
  public createreqData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/request/create`,data);
  }

  
  public reqData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/request/getreq`,data);
  }

  public adminreqData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/request/getadminreq`,data);
  }

  public statusreqData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/request/getstatusreq`,data);
  }

  
  public editreqData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/request/editreq`,data);
  }

  
  public editScheduleData(data): Observable<any> {
    return this.http.post(`${this.url}/api/v1/schedule/edit`,data);
  }


}