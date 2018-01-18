import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Archive } from '../models/Archive';
import 'rxjs/add/operator/map';

const Api_Url = 'http://localhost:65475';

@Injectable()
export class ArchiveService {

  constructor(private _http: HttpClient) { }

  createArchiveEntry(selected) {
    let entry = JSON.stringify(selected);
    return this._http.post(`${Api_Url}/api/archive`, entry, { headers: this.setHeader() } )
    .map((res: Response) => res.json());
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}