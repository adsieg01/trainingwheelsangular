import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Archive } from '../models/Archive';
import { Activity } from '../models/Activity';
import 'rxjs/add/operator/map';

const Api_Url = 'http://localhost:65475';

@Injectable()
export class ArchiveService {

  constructor(private _http: HttpClient) {}

  createArchiveEntry(selected) {
    return this._http.post(`${Api_Url}/api/archive/${selected}`, null, { headers: this.setHeader() } );
  }

  getArchives() {
    return this._http.get(`${Api_Url}/api/archive`, {headers: this.setHeader() } );
  }

  getDailyArchives() {
    return this._http.get(`${Api_Url}/api/archive/1`, {headers: this.setHeader() } ); 
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}