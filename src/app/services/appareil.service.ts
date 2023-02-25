import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppareilService implements OnInit {

constructor(private httpClient : HttpClient){}

  ngOnInit() {
    this.getAppareilsFromServer() ;
  }


  appareilSubject = new Subject<any[]>() ; 
  
    private appareils = [
        { 
          id:1 , 
          nom : 'tv' ,
          status : 'eteint'
         },

         {
          id:2,  
          nom : 'pc' ,
          status : 'allumer'
         },
         { 
          id:3 , 
          nom : 'machat' ,
          status : 'eteint'
         }
          ]; 

          emitAppareilSubject(){
            this.appareilSubject.next(this.appareils.slice()) ; 
          }

          getAppareilById(id: number){
            const appareil = this.appareils.find(
              (obj)=>{
                return obj.id === id ; 
              }
              )
              return appareil ; 
          }

          switchOnAll(){
            for(let appareil of this.appareils){
                appareil.status = 'allumer' ; 
            }
            this.emitAppareilSubject() ; // pour informer les autre parties de l'application que les appareils sont allumes
          } ; 

          switchOffAll(){
            for(let appareil of this.appareils){
                appareil.status = 'eteint' ; 
            }
            this.emitAppareilSubject() ;

          }

          switchOnOne(index: number){
            this.appareils[index].status = 'allumer' ; 
            this.emitAppareilSubject() ;

          }

          switchOffOne(index:number){
            this.appareils[index].status = 'eteint' ; 
            this.emitAppareilSubject() ;

          }

          addAppareil(name: string , status: string)
          {
            const appareilObject = {
              id:0  , 
              nom : '', 
              status: ''
            }; 

            appareilObject.nom = name ; 
            appareilObject.status = status ; 
            appareilObject.id = this.appareils[(this.appareils.length -1 )].id +1 ; 

            this.appareils.push(appareilObject) ;
            this.emitAppareilSubject() ;  
          }


          saveAppareilToServer(){
            this.httpClient.put('https://angular-appareils-5218b-default-rtdb.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
              ()=> console.log("enregistrement reussi") , 
              (err)=> console.log("erreur de sauvegarde"+ err) 
              
            )
          }
          getAppareilsFromServer(){
            this.httpClient.get<any[]>('https://angular-appareils-5218b-default-rtdb.firebaseio.com/appareils.json')
            .subscribe(
              (appareils)=> {
                console.log(appareils)
                  this.appareils = appareils ; 
                  console.log("charge avec success")
              },
              (err)=> {
                  alert('error: '+err) ; 
              }
            )
          }

          
}