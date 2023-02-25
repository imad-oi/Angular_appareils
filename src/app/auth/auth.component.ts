import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  authStatus: boolean = false; 
   constructor(private  authService  : AuthService, private router : Router){} ; 
  ngOnInit() {
    this.authStatus = this.authService.isAuth ; 
  }

  //  on intialise les methodes de authentification ici (controller)
  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        this.authStatus = this.authService.isAuth ; // rendre le isAuth = true , car la methode signIn() ne retourne pas isAuth  
        this.router.navigate(['appareils']) ;  
      }
    ) ; 
  }
  onSignOut(){
    this.authService.signOut(); 
    this.authStatus = this.authService.isAuth ; 
  }

}
