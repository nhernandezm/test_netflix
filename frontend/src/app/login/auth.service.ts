import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { auth } from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlLogin = 'http://localhost:8080/login';
  responseAuth : any = {};
  constructor(private http: HttpClient) { }

  public login(userName:string,password:string): any {

    let dataAuth = this.http.post(this.urlLogin,{
      "userName" : userName,
      "password" :password
    });

    return new Promise((resolve, reject)=>{
      dataAuth.subscribe(response => () =>{
        resolve(response)
      });
    });
  }
}
