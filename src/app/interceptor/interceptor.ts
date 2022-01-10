import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginService } from "../services/user-login.service";



@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private userLoginService: UserLoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userLoginService.isAuthenticated()) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userLoginService.getToken()}`
        }
      })
    }

    return next.handle(req);
  }

}
