import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

    insert(data) {
        return this.http.post(`${environment.API}/users`, data) ;
    }

    findAll() {
        return this.http.get(`${environment.API}/users`)
    }

}
