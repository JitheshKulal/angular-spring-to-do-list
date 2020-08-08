import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoService {

    todoList = [];

    constructor(private _http:HttpClient) {
        this.load();
    }

    load() {
        console.log("Failing after this");
        const token = sessionStorage.getItem('jsessionid');
        const tokenJSON = JSON.parse(token);

        if(token != null || tokenJSON.expires_in < new Date().getTime()){

            console.log(token);
            console.log(tokenJSON);
            const getTasksURL = "http://localhost:8080/getTasks";
            const getTasksHeaders: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer'+ tokenJSON.access_token);

            // this.http.post(getTasksURL,
            //     { withCredentials: true },
            //     { headers: getTasksHeaders }).subscribe( (res) => {
            //         console.log(res);
            //         for(let i=0; ;i++){
            //             if(res[i] == null){
            //                 break;
            //             }
            //             this.todoList.unshift(res[i].task);
            //         }
            //     });

            console.log("Inside Load");
        }


    }

    addItem(task:string, token:string) {
        this.todoList.unshift(task);

        const insertTaskURL = "http://localhost:8080/insertTask";
        const insertTaskParameters: HttpParams = new HttpParams().append('task', task);
        const insertTaskHeaders: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer'+ token);

        this._http.post(insertTaskURL,
            { withCredentials: true },
            { headers: insertTaskHeaders, params: insertTaskParameters }).subscribe( (res) => {
                console.log(res);
            });
    }

}