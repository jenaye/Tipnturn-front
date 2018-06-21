import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
