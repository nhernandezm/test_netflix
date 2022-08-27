import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = "";
  password:string = "";

  constructor(public authService : AuthService,public location : Location) { }

  ngOnInit(): void {
    alert(this.authService.urlLogin);
  }

  login() : void {
    let dataLogin = this.authService.login(this.userName,this.password)
    if(dataLogin.code == "200"){
      location.href = 'home';
    }
  }
  

}
