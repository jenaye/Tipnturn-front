import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";

@Injectable()
export class FinancialService {

    constructor(private http: HttpClient) {
    }

    getData() {

        return this.http.get(`${environment.API}/bilans`) 
              
    }

    insert(data) {
        return this.http.post(`${environment.API}/bilans`, data) 
               
    }

    getMoney() {
        return this.http.get(`${environment.API}/bilan/results`) 

    }

    downloadAsCsv(){
        return this.http.get(`${environment.API}/export/bilan/csv`)
    }



}
