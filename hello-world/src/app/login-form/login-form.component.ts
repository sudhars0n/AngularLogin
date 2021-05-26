import { Component, OnInit } from '@angular/core';

import{Router}from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit(): void {

  }
  loginUser(e:any)
   {
     e.preventDefault();
     console.log(e);
     let username=e.target.elements[0].value;
     let password=e.target.elements[1].value;
     
     if(username=="mqb"&&password=="Harris123"){
          this.user.setUserLoggedIn();
          this.router.navigate(['dashbord']);
     }else{
       this.router.navigate(['invalid']);
     }
   }

}
