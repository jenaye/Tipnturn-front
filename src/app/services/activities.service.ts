import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ActivitiesService {

  constructor(private http: Http) { }

  getData() {
        return this.http
        .get('http://localhost:8000/activities.json')
          .map((res: Response) => {
          return res.json();
          });   
  }

    getDataById(id) {
        return this.http
            .get(`http://localhost:8000/activities/${id}.json`)
              .map((res: Response) => {
                return res.json();
              });          
    }


}
