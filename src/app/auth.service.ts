import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './core/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { CreateUserDto } from './core/interfaces/userDto'


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //logic for register, login and authentication when 1st load the app
  //notify all components that listen for this.currentuser 
  //when subscribe to beh.subject we will get instance of IUSer, the last emitted value
  private _currentUser = new BehaviorSubject<IUser | undefined>(undefined);
  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient) { }

  login$(userData: { email: string, password: string }): Observable<IUser | null> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/users/login`, userData, { observe: 'response' })// withCredentials: true,
      .pipe(
        map(response => response.body),
      )
  }

  logout$(): Observable<void> {
    return this.httpClient
      .post<void>(`${environment.apiUrl}/users/logout`, {} , )//{ withCredentials: true }
  }

  register$(userData: CreateUserDto): Observable<IUser | Object> {
    return this.httpClient.post(`${environment.apiUrl}/users/register`, userData, )//{ withCredentials: true }
  }

  handleLogin(newUser: IUser) {
    this._currentUser.next(newUser);
  }

  handleLogout() {
    this._currentUser.next(undefined);
  }

  getAuthToken(): string | undefined{
    const authToken = this._currentUser.value?.accessToken
    return authToken;
  }
}
