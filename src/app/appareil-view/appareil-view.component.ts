import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  
  constructor(private appareilService : AppareilService ){}

  isAuth=true ;
  lastUpdate = new Date() ;
  appareils: any[] =[] ; 
  appareilSubsciption : Subscription = new Subscription() ; 
  
  
  ngOnInit(){
    // appareilSubject est un observable, donc il emit des information dans le temps, pour qu'on puisse avoir ces information
    // on doit s'abonner, cela signifie que le composant sera netifie à chaque fois que  appareilSubject emet un evenement
    this.appareilSubsciption = this.appareilService.appareilSubject.subscribe(
      (appareils: any[])=>{ this.appareils  =  appareils} // mettre à jour la propriété appareils du composant avec les données émises par appareilSubject
    ) ; 
    this.appareilService.emitAppareilSubject() ; 
  }
 ; 
  
  onAllumer(){
  this.appareilService.switchOnAll();
 }

   onEteindre(){
    this.appareilService.switchOffAll(); 
  } ; 

  onSave(){
    this.appareilService.saveAppareilToServer() ; 
  }

  onFetch(){
    this.appareilService.getAppareilsFromServer() ; 
  }

}
