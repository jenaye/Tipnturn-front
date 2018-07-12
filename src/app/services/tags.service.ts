import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable()
export class TagsService {

  constructor(private http: HttpClient) { }

    newTag(data) {
        return this.http.post(`${environment.API}/tags`, data) ;
    }
    updateTag(data) {
        return this.http.put(`${environment.API}/tags/${data.id}`, data);
    }
    deleteTag(data){
        return this.http.delete(`${environment.API}/tags/${data}`);
    }

    getTag(data) {
        return this.http.get(`${environment.API}/tags/${data}`);
    }

    getAllTag(){
        return this.http.get(`${environment.API}/tags`)
    }


}