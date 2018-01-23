import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'http://localhost:65475';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(`${ApiUrl}/api/ManageUsers`, { headers: this.setHeader() } );
  }
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}