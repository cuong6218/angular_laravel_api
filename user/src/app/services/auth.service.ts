import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private userService: UserService) { }
  isLogin(data: any)
  {
    return true;
    // let users = this.userService.getAll();
    // for(let user of users) {
    //   if(data.email == user.email && data.password == user.password)
    //   {
    //     localStorage.setItem('currentUserLogin', JSON.stringify(user));
    //     return true;
    //   } 
    // }
    // return false;
  }
  getCurrentUserLogin()
  {
    return JSON.parse(localStorage.getItem('currentUserLogin'));
  }
}
