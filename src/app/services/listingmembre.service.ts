import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from "./checkToken.service";

@Injectable()
export class ListingmembreService {

  constructor(private http: CheckTokenService) { }

  getData() {
    return this.http
        .get('http://localhost:8000/api/membres.json')
          .map((res: Response) => {
            return res.json();
          });
  }

  getDataByName(prenom){
    return this.http
        .get(`http://localhost:8000/api/membres.json?prenom=${prenom}`)
        .map((res: Response) => {
            return res.json();
        });
    }

}
