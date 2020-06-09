import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
arrUsers: User [] = [];

user: User;
  constructor() { }
  pushNewUser( user: User): void
  {

    this.arrUsers.push(user);
  }
  GetArrUsers(): User[] {
    return this.arrUsers;
  }
}

