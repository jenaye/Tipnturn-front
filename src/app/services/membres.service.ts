import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import url from '../../../config';
@Injectable()
export class MembresService {

  constructor(private http: CheckTokenService) { }
    insert(data) {
        return this.http
            .post('${url.API}/membres', data)
            	.map((res: Response) => {
                	return res.json();
            });

    }
    edit(data, id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(`${url.API}/membres/${id}`, data, {headers: headers})
            .map((res: Response) => {
                return res.json();
            });

    }

    findById(id){
      return this.http.get(`${url.API}/membres/${id}`)
          .map((res: Response) => {
              return res.json();
          });
    }

}
