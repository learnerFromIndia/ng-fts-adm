

export class AuthService{

    checkForAuthentication(email:string,pass:string):boolean{
     var res:boolean= false;
     if(email === 'admin@xyz.com' && pass === 'admin'){
         res = true;
     }
     return res;
    }

}