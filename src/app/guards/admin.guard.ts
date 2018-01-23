import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'http://localhost:65475/api/Account/isAdmin';

@Injectable()
export class AdminGuard implements CanActivate {


    constructor(private http: HttpClient) { }

    canActivate(): Observable<boolean> {
        return this.http.get(`${ApiUrl}`, { headers: this.setHeader() }).map(isAdmin => {
            if (!isAdmin) { 
                return false; }
            return true;
        });
    }

    private setHeader(): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
      }
}