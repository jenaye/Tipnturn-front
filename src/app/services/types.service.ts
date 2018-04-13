import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";
@Injectable()
export class TypesService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(`${environment.API}/types.json`)
          
  }

}
