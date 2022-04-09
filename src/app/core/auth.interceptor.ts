import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser} from './interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(event => {
      // localhost:3030/users/login || localhost:3030/users/register
      if (event instanceof HttpResponse) {
        if(event.url?.endsWith('login') || event.url?.endsWith('register')) {
          //TO DO save user as state of my app
          console.log('login/register happend');
          const newlyLoggedUser: IUser = event.body as IUser;
          this.authService.handleLogin(newlyLoggedUser);
        }
      }
    }));
  }
}

//by login or register get user from reponse and save it in our app
