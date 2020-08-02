import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenData } from './tokendata';
import { UserData } from './userdata';

@Injectable()
export class TokenService {
    constructor(private _http: HttpClient) { }

    getToken(userData: UserData) {

        const getTokenURL = "http://localhost:8080/oauth/token";
        const getTokenParameters: HttpParams = new HttpParams().append('grant_type', 'password').append('username', userData.username).append('password', userData.password);
        const getTokenHeaders: HttpHeaders = new HttpHeaders().append('Authorization', 'Basic ' + btoa('client:secret'));

        return this._http.post<TokenData>(getTokenURL,
            { withCredentials: true },
            { headers: getTokenHeaders, params: getTokenParameters });
    }

}