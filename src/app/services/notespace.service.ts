import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notespace } from '../models/Notespace';
import { Router } from '@angular/router/src/router';

const ApiUrl = 'http://localhost:65475'
// const ApiUrl = 'http:trainingwheels-2.apphb.com'

@Injectable()
export class NotespaceService {

  constructor(private _http: HttpClient) { }

  getNotespace() {
    return this._http.get(`${ApiUrl}/api/Notespace`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  updateNotespace(notespace: Notespace) {
    return this._http.put(`${ApiUrl}/api/Notespace`, notespace, { headers: this.getHeaders() });
  }

  getLoggedIn() {
    return localStorage.getItem('login')
  }
}
