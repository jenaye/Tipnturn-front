import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CheckTokenService} from './checkToken.service';
import url from './../../config';


@Injectable()
export class ActivitiesService {

  constructor(private http: CheckTokenService) { }

  getData() {
        return this.http
            .get(`${url.API}/activities.json`)
            .map((res: Response) => {
                return res.json();
          });
  }

  getDataById(id) {
      return this.http
          .get(`${url.API}/activities/${id}.json`)
          .map((res: Response) => {
              return res.json();
          });
    }


  getHowManyMembre() {
      return this.http
          .get(`${url.API}/activity/howmany`)
          .map((res: Response) => {
              return res.json();

          });
  }

    insert(data) {
        return this.http
            .post(`${url.API}/activities`, data)
            .map((res: Response) => {
                return res.json();
            });

    }

}
