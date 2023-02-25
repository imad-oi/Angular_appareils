import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent {

  constructor(private appareilService : AppareilService , 
              private router : Router 
    ){} ; 

  defaultOnOff= 'eteint' ; 

  onSubmit(form: NgForm){
      const name = form.value['name']; 
      const status = form.value['status'];

      this.appareilService.addAppareil(name , status) ; 
      this.router.navigate(['/appareils']) ; 
   }

}
