import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";
@Injectable()
export class TypesService {

  constructor(private http: CheckTokenService) { }
  getData() {
    return this.http
        .get(`${environment.API}/types.json`)
          .map((res: Response) => {
            return res.json();
                });
  }

}
