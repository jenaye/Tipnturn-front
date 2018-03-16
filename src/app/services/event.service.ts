import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import url from './../../config';
@Injectable()
export class EventService {

  constructor(private http: CheckTokenService) { }
  
  getData() {
    return this.http
        .get(`${url.API}/events.json`)
          .map((res: Response) => {
            return res.json();
                });
  }

  insert(data) {
    return this.http
        .post(`${url.API}/events`, data)
            .map((res: Response) => {
                return res.json();
        });
}

}
