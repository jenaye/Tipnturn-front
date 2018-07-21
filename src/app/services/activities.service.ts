import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../environments/environment";


@Injectable()
export class ActivitiesService {

  constructor(private http: HttpClient) { }


    getData(): Observable<any>  {
            return this.http.get(`${environment.API}/activities`)
    }

    getDataById(id: string): Observable<any>  {
        return this.http.get(`${environment.API}/activities/${id}`)
    }

    getHowManyActivites(): Observable<any>  {
        return this.http.get(`${environment.API}/activity/howmany`)
    }

    insert(data :any) : Observable<any> {
        return this.http.post(`${environment.API}/activities`, data)

    }
    delete(id : string) : Observable<any> {
        return this.http.delete(`${environment.API}/activities/${id}`)
    }

    update(id:string, data:any) : Observable<any>{
        return this.http.put(`${environment.API}/activities/${id}`, data)
    }
 

}
