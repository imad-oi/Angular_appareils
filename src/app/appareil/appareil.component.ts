import { Component, Input , OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService){} ; 

  @Input() appareilName :String='' ; 
  @Input() appareilStatus = ''; 
  @Input() indexOfAppareil :number = 0 ; 
  @Input() id: number = 1  ; 
  
   getStatus(){
    return this.appareilStatus  ; 
  }  ; 

  getColor(){
    if(this.appareilStatus == 'allumer'){
      return 'green'  ; 
    }
    else{
      return 'red' ; 
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil) ; 
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil) ; 
  }

  ngOnInit() {
  }; 

}
