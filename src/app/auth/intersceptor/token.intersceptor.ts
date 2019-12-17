import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from 'src/app/service/error-dialog.service/error.service';
import { throwError } from 'rxjs';
// import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public errorService:ErrorDialogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = ''

    if(localStorage.getItem('Token')){

        token = (localStorage.getItem('Token'))
    }

    const authReq = req.clone({ setHeaders: { Authorization: 'Bearer '+ token } });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
        };
        this.errorService.openDialog(data);
        return throwError(error);
    })
     );
  }


  // handleError(error: HttpErrorResponse){
  //   console.log("lalalalalalalala");
  //   return throwError(error);
  //  }
 
}
