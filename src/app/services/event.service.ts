import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }
  
  getData( data : string = '') {
    return this.http.get(`${environment.API}/events`);
    
  }

  insert(data) {
    return this.http.post(`${environment.API}/events`, data);
}


edit(data, id) {
  return this.http.put(`${environment.API}/events/${id}`, data); 

}

findById(id) {
return this.http.get(`${environment.API}/events/${id}`);

}

}
