import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  
  users : User[] = [] ; 
  userSubscription : Subscription  = new Subscription ; // pour qu'on puisse unsubscribe à tout moment 
  
  constructor( private userService : UserService){}

  
  
  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[])=> this.users = users 
      ) ; 
      this.userService.emitUser(); 
    }
    
    
    ngOnDestroy() {
      this.userSubscription.unsubscribe() ; 
    }




}
