import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";
@Injectable()
export class MembersService {

  constructor(private http: CheckTokenService) { }
    insert(data) {
        return this.http
            .post(`${environment.API}/membres`, data)
            	.map((res: Response) => {
                	return res.json();
            });
    }

    edit(data, id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(`${environment.API}/membres/${id}`, data, {headers: headers})
            .map((res: Response) => {
                return res.json();
            });

    }

    findById(id) {
      return this.http.get(`${environment.API}/membres/${id}`)
          .map((res: Response) => {
              return res.json();
          });
    }

}
