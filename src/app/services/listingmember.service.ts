import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";

@Injectable()
export class ListingmemberService {

  constructor(private http: CheckTokenService) { }

  getData() {
    return this.http
        .get(`${environment.API}/membres.json?enabled=1`)
          .map((res: Response) => {
            return res.json();
                });
  }
  
  getDatalazyLoad(sort: string , order: string, page: number) {
    return this.http
    .get(`${environment.API}/menbres.json?enabled=1&sort=${sort}&order=${order}&page=${page + 1}`)
     .map((res: Response) => {
        return res.json();
    });
  }

  getDataByName(prenom) {
    return this.http
        .get(`${environment.API}/membres.json?prenom=${prenom}&enabled=1`)
        .map((res: Response) => {
            return res.json();
        });
    }

}
