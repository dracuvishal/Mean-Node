import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard-service/dashboard.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  userId: any
  userData: any
  constructor(public router:Router,private dashboardService: DashboardService, public sharedService: SharedService) {

  }

  ngOnInit() {

    this.dashboardService.getUserData({}).subscribe(res => {
      console.log("got the response")
      console.log((res))
      if (res.status == 1) {
        this.userData = res.data
      } else {
        this.sharedService.showError(res.msg)
      }

    }, error => {
      console.log("error ocured!!!1")
      console.log(error)
      this.sharedService.showError(error)
    })
  }


  // getUserId() {

  //   if (sessionStorage.getItem('userId')) {
  //     console.log(JSON.parse(sessionStorage.getItem('userId')))

  //     return JSON.parse(sessionStorage.getItem('userId'))
  //   }
  //   return '5dd4d96c8750013e40ff8da4'
  // }

  tablePagination(data) {
    console.log("data got here!1")
    console.log(data)

    let post = {
      "pagesize": 12,
      "pageno": data.pageno
    }
    this.dashboardService.pagination(post).subscribe(res => {
      console.log(res)
      if (res.status == 1) {
        if(res.data.length>0){
          this.userData = res.data
        }else{
          this.sharedService.showError("data not found")
        }
       
      } else {
        this.sharedService.showError(res.msg)
      }
    }, error => {
      this.sharedService.showError(error)
    })

  }

  logout(){
    console.log("clicke LOGOUT!!!")
    localStorage.clear()
    sessionStorage.clear()
    this.sharedService.showSucess("Sucess fully logged Out")
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000);
    
  }
  
}
