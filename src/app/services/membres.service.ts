import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';

@Injectable()
export class MembresService {

  constructor(private http: CheckTokenService) { }
    
    insert(data) {
        return this.http
            .post('http://localhost:8000/api/membres', data)
            	.map((res: Response) => {
                	return res.json();
            });

    }
    edit(data, id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(`http://localhost:8000/api/membres/${id}`, data, {headers: headers})
            .map((res: Response) => {
                return res.json();
            });

    }

    findById(id){
      return this.http.get(`http://localhost:8000/api/membres/${id}`)
          .map((res: Response) => {
              return res.json();
          });
    }

}
