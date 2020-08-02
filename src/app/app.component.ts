import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { UserData } from './userdata';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _http: HttpClient, private tokenService: TokenService){
  }

  userData: UserData = new UserData();
  token = '';
  error = '';

  printEvent(event){
    console.log(event);
  }

  getToken(){
    this.tokenService.getToken(this.userData).subscribe(
      res => { this.token= res.access_token; this.getUserNameOfToken(res), this.error = ''; }, 
      err => { this.error = 'ERROR'; this.token = ''; }
      );
    
  }

  getUserNameOfToken(tokenInfo){
    this._http.post("http://localhost:8080/api/getUser",
    {withCredentials: true},
    {headers: new HttpHeaders({'Authorization':'Bearer '+tokenInfo['access_token']})}).subscribe(res => console.log(res));
  }
}

