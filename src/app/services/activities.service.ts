import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';


@Injectable()
export class ActivitiesService {

  constructor(private http: CheckTokenService) { }

  getData() {
        return this.http
            .get('http://localhost:8000/api/activities.json')
            .map((res: Response) => {
                return res.json();
          });
  }

  getDataById(id) {
      return this.http
          .get(`http://localhost:8000/api/activities/${id}.json`)
          .map((res: Response) => {
              return res.json();
          });
    }

    insert(data) {
  /*      const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = new RequestOptions({ headers: headers });*/
        return this.http
            .post('http://localhost:8000/api/activities', data )
            .map((res: Response) => {
                return res.json();
            });

    }

}
