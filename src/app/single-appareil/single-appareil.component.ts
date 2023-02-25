import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent  implements OnInit{

  constructor(private appareilService : AppareilService,
              private route : ActivatedRoute
            ){} ; 

  nom: string | undefined = 'Appareil' ; 
  status : string | undefined = 'Status' ; 

  ngOnInit() {
    const id =  this.route.snapshot.params['id'];
    this.nom =  this.appareilService.getAppareilById(+id)?.nom ; 
    this.status =  this.appareilService.getAppareilById(+id)?.status ; 
  }

}
