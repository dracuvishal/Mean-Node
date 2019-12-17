import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}


  canActivate(): boolean {

    if (!localStorage.getItem('Token')) {
        localStorage.clear()
        sessionStorage.clear()
    //   this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }


}