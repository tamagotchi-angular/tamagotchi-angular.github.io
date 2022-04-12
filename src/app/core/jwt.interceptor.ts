import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = this.authService.getAuthToken();

    if(authToken){
      let authRequest = request.clone({
        headers: request.headers.set('X-Authorization', `${authToken}`).set('Content-Type', 'application/json')
      })

      if(request.body){
        authRequest = request.clone({
          headers: request.headers.set('Content-Type', 'application/json')
        });
      }
      return next.handle(authRequest);
    }

    if(request.body){
      const authRequest = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }

}
