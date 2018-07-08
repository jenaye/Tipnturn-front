import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

    newTask(data) {
        return this.http.post(`${environment.API}/tasks`, data) ;
    }
    updateTask(id : number ,data : any) {
        return this.http.put(`${environment.API}/tasks/${id}`, data);
    }
    deleteTask(data){
        return this.http.delete(`${environment.API}/tasks/${data}`);
    }

    getTask(data) {
        return this.http.get(`${environment.API}/tasks/${data}`);
    }

    getAllTasks(){
        return this.http.get(`${environment.API}/tasks`)
    }


}