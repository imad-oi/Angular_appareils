import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService{
    private users : User[] = [
        {
            firstName : 'imad', 
            lastName : 'oissafe', 
            email: 'imad@gmail.com' , 
            drinkPreferences : 'coca' ,
            age :  20 , 
            hobbies:[ 'sport', 'coding'] 
        }
    ] ; 
    userSubject = new Subject<User[]>() ; 

    emitUser(){
        this.userSubject.next(this.users.slice()); 
    }

    addUser(user : User){
        this.users.push(user) ; 
        this.emitUser() ;
   }

}