import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CheckTokenService} from './checkToken.service';
import {environment} from "../../environments/environment";


@Injectable()
export class ActivitiesService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any>  {
        return this.http.get(`${environment.API}/activities`)
      }

  getDataById(id): Observable<any>  {
      return this.http.get(`${environment.API}/activities/${id}`)
    }


  getHowManyActivites(): Observable<any>  {
      return this.http.get(`${environment.API}/activity/howmany`)
  }

    insert(data) : Observable<any> {
        return this.http.post(`${environment.API}/activities`, data)

    }

}
