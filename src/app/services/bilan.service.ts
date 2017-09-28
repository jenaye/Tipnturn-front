import { Injectable } from '@angular/core';
import {Response, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from "./checkToken.service";

@Injectable()
export class BilanService {

    constructor(private http: CheckTokenService) {
    }

    getData() {
        return this.http
            .get('http://localhost:8000/api/bilans.json')
                .map((res: Response) => {
                    return res.json();
                });
            
    }

    insert(data) {
        return this.http
            .post('http://localhost:8000/api/bilans', data)
                .map((res: Response) => {
                    return res.json();
            });   
    }

}
