import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MembresService {

  constructor(private http: Http) { }


    insert(data) {
        return this.http
            .post('http://localhost:8000/membres', data)
            	.map((res: Response) => {
                	return res.json();
            });
            
    }

}
