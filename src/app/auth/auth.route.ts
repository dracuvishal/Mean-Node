import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginSignupComponent } from './login/login-signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:loginSignupComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  }
  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
