import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, public authservice: AuthService, public sharedService: SharedService) { }

  AdminForm: FormGroup
  ngOnInit() {
    localStorage.clear()
    sessionStorage.clear()
    this.IntializeForm()
  }
  IntializeForm() {
    this.AdminForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  adminLogin() {
    console.log("->>>>>>>>>>>>>>")

    if(this.AdminForm.valid){

      let adminobj = {

        "email": this.AdminForm.value.email,
        "password": this.AdminForm.value.password
      }
  
      this.authservice.adminLogin(adminobj).subscribe(res => {
  
        if (res.status == 1) {
          this.sharedService.showSucess(res.msg)
          localStorage.setItem('Token',res.token)
          this.router.navigate(['/dashboard/admincontent'])
        } else {
          this.sharedService.showError(res.msg)
        }
      }, error => {
        this.sharedService.showError(error)
      })
    }else{
      this.sharedService.showError("Please fill all fields Correctly!")
    }
    // localStorage.setItem('Token',JSON.stringify('basdjf'))

  }

}
