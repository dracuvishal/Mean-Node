import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private toastr: ToastrService) { }

  getUserId(){

    if(sessionStorage.getItem('userId')){
      console.log(JSON.parse(sessionStorage.getItem('userId'))) 

     return JSON.parse(sessionStorage.getItem('userId')) 
    }
     return 'User Not Found'
  }

  showError(msg:string){
    debugger
    this.toastr.error(msg,'',{
      timeOut: 3000
    })

  }
  showSucess(msg:string){
    this.toastr.success(msg,'',{
      timeOut: 2000
    })
  }
}
