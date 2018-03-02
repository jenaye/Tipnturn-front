import { Injectable } from '@angular/core';
import {Response, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import url from './../../config';

@Injectable()
export class FinancialService {

    constructor(private http: CheckTokenService) {
    }

    getData() {
        return this.http
            .get(`${url.API}/bilans.json`)
                .map((res: Response) => {
                    return res.json();
                });
    }

    insert(data) {
        return this.http
            .post(`${url.API}/bilans`, data)
                .map((res: Response) => {
                    return res.json();
            });
    }

    getMoney() {
        return this.http
            .get(`${url.API}/bilan/results`)
            .map((res: Response) => {
                return res.json();
            });
    }



}
