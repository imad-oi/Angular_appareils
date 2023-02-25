import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup ; 
  constructor(private formBuilder  :FormBuilder, 
              private userService : UserService , 
              private router : Router
      ) {}


  ngOnInit() {
    this.initForm() ; 
  }

  initForm(){
    this.userForm = this.formBuilder.group( {
      firstName : ['' , Validators.required], 
      lastName : ['' , Validators.required], 
      email : ['' , [Validators.required , Validators.email]], 
      drinkPreferences   : ['' , Validators.required] , 
      age  :[ , Validators.required] , 
      hobbies : this.formBuilder.array([])
    })
  }

  onSubmitForm(){
    const formValue  = this.userForm.value  ; 
    const newUser = new User(
      formValue['firstName'] , 
      formValue['lastName'] , 
      formValue['email'] , 
      formValue['drinkPreferences'] , 
      formValue['age'] , 
      formValue['hobbies'] ? formValue['hobbies']  : []
    ) ;
    this.userService.addUser(newUser) ; 
    this.router.navigate(['/users']) ; 

  }

  // fonction qui permet de retourner 

  getHobbies(){
    return  this.userForm.get('') as FormArray ;  // as formArray pour qu'on puisse utiliser les methode que nous offre formarray : push(), controls , length....
  }

  onAddHobby(){
    const newHobbyControl  = this.formBuilder.control('', Validators.required) ; 
    this.getHobbies().push(newHobbyControl) ; 
  }
}
