import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import map from './../../config';
@Injectable()
export class MapService {

  constructor(private http: Http) { 
    
  }
  getData(address) {
    const headers = new Headers();
    
    // headers.append("Access-Control-Allow-Origin", "*");

  
    // const options = new RequestOptions({headers: headers});
   
    return this.http
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+FRs&key=${map.MAPS_KEY}`)
          .map((res: Response) => {
            return res.json();
                });
  }

}
