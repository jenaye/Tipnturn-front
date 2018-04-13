import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";
@Injectable()
export class MembersService {

  constructor(private http: HttpClient) { }

    insert(data) {
        return this.http.post(`${environment.API}/membres`, data) ;
    }

    edit(data, id) {
      
        return this.http.put(`${environment.API}/membres/${id}`, data) 

    }

    findById(id) {
      return this.http.get(`${environment.API}/membres/${id}`) 
    }

}
