import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {environment} from "../../environments/environment";

@Injectable()
export class CsvService {

    constructor(private http: Http) {
    }

    downloadAsCsv(){
        return this.http.get(`${environment.API}/export/bilan/csv`)
    }

    downloadMembersAsCsv(){
        return this.http.get(`${environment.API}/export/membres/csv`)
    }



}
