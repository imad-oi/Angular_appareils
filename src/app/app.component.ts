import { Component, OnDestroy, OnInit } from '@angular/core';
import {  interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {

  constructor(){}
  
  secondes: number = 0 ; 
  counterSubscription: Subscription = new Subscription;
  
  ngOnInit(){
    const counter = interval(1000) ; 

    this.counterSubscription  = counter.subscribe(
      valeur => this.secondes = valeur 
    ) ; 
  // ce code en-dessous est une autre methode de observer un observable 

    // counter.subscribe(
    //   (valeur : number)=>{
    //     this.secondes = valeur ; 
    //   }, 
    //   (erreur : any)=>{
    //     console.log("une erreur se produit") ; 
    //   } , 
    //   ()=>{
    //     console.log("operetion teminée") ; 
    //   }
    // ); 
  };  

  // pour detruire un observable  
  ngOnDestroy() {
    // this.counterSubscription.unsubscribe();
  }

  



  
}

