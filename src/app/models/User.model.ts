export class User {
    constructor(public firstName : string , 
                public lastName : string , 
                public email : string ,
                public drinkPreferences : string,
                public age : number ,
                public hobbies?: string[]   , 
                            ) {}
}