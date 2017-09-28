import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from "./checkToken.service";

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

}
