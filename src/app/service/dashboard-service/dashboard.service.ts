import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment as env} from '../../../environments/environment'

const userRoutes = {

  getUserdata:'userdata/getUserData',
  pagination:'userdata/pagination',
  getAllUsers:'admin/getallusers',
  getAllItems:'userdata/getAllItems',
  updateitems:'admin/updateitem',
  deleteitems:'admin/deleteitem',
  updateuser:'admin/updateUser',
  uploadfile:'admin/upload',
  addproduct:'admin/addproduct'
}

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  


  constructor( public http:HttpClient) { 
    console.log(userRoutes.getUserdata)
  }

  
  getUserData(postParam):Observable<any>{
    console.log(postParam)
    return this.http.post(env.ApiBaserUrl+userRoutes.getUserdata,postParam)
  }

  pagination(postParam):Observable<any>{
    console.log(postParam)
    return this.http.post(env.ApiBaserUrl+userRoutes.pagination,postParam)
  }


  getAllUsers():Observable<any>{
    return this.http.get(env.ApiBaserUrl+userRoutes.getAllUsers)
  }
  
  getAllItems():Observable<any>{
    return this.http.get(env.ApiBaserUrl+userRoutes.getAllItems)
  }

  updateItems(data):Observable<any>{
    return this.http.post(env.ApiBaserUrl+userRoutes.updateitems,data)
  }

  deleteitems(data){
    return this.http.post(env.ApiBaserUrl+userRoutes.deleteitems,data)
  }

  updateUser(data){
    return this.http.post(env.ApiBaserUrl+userRoutes.updateuser,data)
  }

  uploadproductImage(img:File):Observable<any>{

    const formData = new FormData();
    formData.append('product', img);
    console.log(formData)
    return this.http.post(env.ApiBaserUrl+userRoutes.uploadfile,formData)
  }

  uploadProduct(data):Observable<any>{

    return this.http.post(env.ApiBaserUrl+userRoutes.addproduct,data)
  }
}
