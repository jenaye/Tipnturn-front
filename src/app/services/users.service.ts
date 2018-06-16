import { Injectable } from '@angular/core';
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

    count(){
        return this.http.get(`${environment.API}/admin/count`)

    }
}
