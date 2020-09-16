import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';
import { IUser } from './../interfaces/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  getAll(): Observable<IUser[]>
  {
    return this.http.get<IUser[]>(environment.userUrl + '/users');
  }
  register(user:IUser)
  {
    return this.http.post<IUser>(environment.userUrl + '/users/store', user);
  }
  delete(id: number)
  {
    return this.http.delete<IUser>(environment.userUrl +`/users/${id}/delete`);
  }
  getUserById(id: number): Observable<IUser>
  {
    return this.http.get<IUser>(environment.userUrl + `/users/${id}/show`);
  }
  // findById(id: number)
  // {
  //   return this.users.findIndex(user => user.id == id);
  // }
  updateUser(user: IUser, id: number)
  {
    return this.http.put<IUser>(environment.userUrl + `/users/${id}/update`, user);
  }
 
}
