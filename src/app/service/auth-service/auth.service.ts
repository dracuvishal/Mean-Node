import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {environment as env} from '../../../environments/environment'

const routes = {
  login:'users/userlogin',
  signup:'users/adduser',
  adminLogin:'users/adminLogin'
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(data):Observable<any>{
    return this.http.post(env.ApiBaserUrl+routes.login,data)
  }

  signUp(data):Observable<any>{
    return this.http.post(env.ApiBaserUrl+routes.signup,data)
  }

  adminLogin(data):Observable<any>{
    return this.http.post(env.ApiBaserUrl+routes.adminLogin,data)
  }
}
