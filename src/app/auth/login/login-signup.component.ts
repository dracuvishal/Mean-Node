import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class loginSignupComponent implements OnInit {

  username: any
  password: any
  loginForm: FormGroup
  signUpForm: FormGroup
  opensignup: boolean

  constructor(private fb: FormBuilder, public router: Router, public userService: AuthService, public sharedService: SharedService) { }

  ngOnInit() {
    localStorage.clear()
    sessionStorage.clear()
    this.InitializeLoginForm()
  }

  get LF(){
    return this.loginForm.controls
  }

  userLogin(): void {

    console.log("clcie thwe login buttonwe!!!")
    console.log(this.loginForm)

    if(this.loginForm.valid){

      let userobj = {
        "name": this.loginForm.value.username,
        "password": this.loginForm.value.password
      }
      this.userService.login(userobj).subscribe(res => {
        console.log(res)
        if (res.status == 1) {
          localStorage.setItem('Token', res.token)
          this.router.navigate(['/dashboard/content'])
        } else {
          this.sharedService.showError(res.msg)
        }
  
      }, error => {
        console.log(error)
        this.sharedService.showError(error)
      })
    }
    else{
      this.sharedService.showError("Please fill all fields Correctly!")
    }
    

  }


  InitializeLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  InitializeSignUpForm() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.min(10)]]

    })
  }

  createNew() {

    this.opensignup = true
    this.InitializeSignUpForm()

  }

  Adminlogin(){
    console.log("cliked on admin login!!!!")
    this.router.navigate(['/auth/adminlogin'])
    } 

  userSignUp() {
    let SignUpObj = {
      "name": this.signUpForm.value.username,
      "email": this.signUpForm.value.email,
      "mobile": this.signUpForm.value.mobile,
      "password": this.signUpForm.value.password,
    }

    this.userService.signUp(SignUpObj).subscribe(res => {
      console.log(res)
      if (res.status == 1) {

        this.sharedService.showSucess(res.msg)
        setTimeout(() => {
          this.opensignup=false
        }, 2000);
      } else {
        this.sharedService.showError(res.msg)
      }
    }, error => {
      console.log("error occurd!!")
      this.sharedService.showError(error)
    })
  }
}
