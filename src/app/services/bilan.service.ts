import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BilanService {

    constructor(private http: Http) {
    }


    getData() {
        return this.http
            .get('http://localhost:8000/bilans.json')
                .map((res: Response) => {
                    return res.json();
                });
            
    }


    insert(data) {
        return this.http
            .post('http://localhost:8000/bilans', data)
                .map((res: Response) => {
                    return res.json();
            });   
    }

}
