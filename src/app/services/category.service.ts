import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Activity } from '../models/Activity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

const Api_Url = 'http://localhost:65475';
@Injectable()
export class CategoryService {
  constructor(private _http: HttpClient) { }
  
  getCategories() {
    return [
      new Category(1, 'Health and Wellness'),
      new Category(2, 'Hygiene'),
      new Category(3, 'Finance'),
      new Category(4, 'Social'),
      new Category(5, 'Organization and Commitments')
    ];
  }

  getActivities() {
      return this._http.get(`${Api_Url}/api/Activity`, { headers: this.setHeader()});
  }
  
  private setHeader(): HttpHeaders{
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
