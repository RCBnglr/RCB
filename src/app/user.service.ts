import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http:HttpClient) { }

      testData(){
        return this._http.get("http://localhost:3000/people")
        .map(result => result);
      }

//   register(body:any){
//     return this._http.post('http://127.0.0.1:3000/users/register',body,{
//       observe:'body',
//       headers:new HttpHeaders().append('Content-Type','application/json')
//     });
//   }

  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    return this._http.get('http://127.0.0.1:3000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}