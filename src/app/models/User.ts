
export class User {

    public email : string;
    public fullname : string;
    public googleMapsKey : string;
    public id: number;
    public lastLogin : string;
    public plainPassword : string;
    public username : string;
  

    constructor(userName : string , userId? : number, userEmail?:string, userFullname? : string , userGoogleMapsKey?:string, userlastLogin?:string,userPlainPassword?:string){
      this.username = userName;
      if(userId){this.id =userId};
      if(userEmail){ this.email = userEmail};
      if(userFullname){ this.fullname =userFullname};
      if(userGoogleMapsKey){this.googleMapsKey= userGoogleMapsKey};
      if(userlastLogin){this.lastLogin= userlastLogin};
      if(userPlainPassword){this.plainPassword= userPlainPassword};

    }

 
   
}