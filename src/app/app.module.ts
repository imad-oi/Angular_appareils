import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes =[
  { path: '' , component : AppareilViewComponent},
  { path: 'auth' , component : AuthComponent}, 
  { path: 'appareils' , canActivate: [AuthGuard]  , component : AppareilViewComponent}, 
  { path: 'appareils/:id' , canActivate: [AuthGuard]  ,  component : SingleAppareilComponent}, 
  { path: 'edit' , canActivate: [AuthGuard]  ,  component : EditAppareilComponent}, 
  { path: 'users' ,  component : UserListComponent}, 
  { path: 'new-user' ,  component : NewUserComponent}, 
  { path: 'not-found' , component : FourOhFourComponent},
  { path: '**' , redirectTo:'/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule , 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: 
    [
      AppareilService,
      AuthGuard,
     AuthService , 
     UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
