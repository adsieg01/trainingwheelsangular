import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { error } from 'util';

// const Api_Url = 'http://localhost:65475'
const Api_Url = 'http://trainingwheels-4.apphb.com';

@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  isAdmin = new Subject<boolean>();
  
  // Declare variable that determines if there has been an http error response or not, to a login request
  loginError: boolean;

  constructor( private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
      
    return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('login', '1')
      this.isLoggedIn.next(true);
      this._http.get(`${Api_Url}/api/Account/isAdmin`, { headers: this.setHeader() }).subscribe((res: boolean) => this.isAdmin.next(res))
      this._router.navigate(['/'])},
      (error) => {
        // sets the error that a login failed
        console.log('Http error found')
        this.loginError = true;
      }
    );
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() } );
  }

  
  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.isAdmin.next(false);
    this._router.navigate(['/']);
    return this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
