import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";

@Injectable()
export class ListingmemberService {

  constructor(private http: HttpClient) { }

  getData() {

    return this.http.get<any>(`${environment.API}/membres?enabled=1`);
  }
  
  getDatalazyLoad(sort: string , order: string, page: number) {
    return this.http.get<any>(`${environment.API}/menbres?enabled=1&sort=${sort}&order=${order}&page=${page + 1}`) 
     
  }

  getDataByName(prenom) {
    return this.http.get<any>(`${environment.API}/membres?prenom=${prenom}&enabled=1`) 
    }

}
