import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../models/UserInfo';
import 'rxjs/add/operator/map';

const Api_Url = 'http://trainingwheels-2.apphb.com';

@Injectable()
export class ScoreBarService {

  constructor(private _http: HttpClient) { }

  scoreTrack() {
    return this._http.get(`${Api_Url}/api/account/userinfo`, { headers: this.setHeader() } )
    .map(result => result);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
