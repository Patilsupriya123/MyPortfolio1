import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  User= {"email":"patilsupriya757@gmail.com","password":"Supriya@123"}
  login(email:string,password:string)
  {
      if(email===this.User.email && password===this.User.password)
      {
        return true;
      }
      else
      return false;
  }
  
}
