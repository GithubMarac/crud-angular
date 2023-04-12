import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USERS: Array<User> = [
    { id: 1, name: 'Mario', address: 'Zagrebacka 1' },
    { id: 2, name: 'Ivan', address: 'Zagrebacka 2' },
    { id: 3, name: 'Marko', address: 'Zagrebacka 2' },
    { id: 4, name: 'Petar', address: 'Zagrebacka 2' },
  ];

  getUsers(): Observable<User[]> {
      const users = of(this.USERS);
      return users;
  }
  constructor() { 

  }
}
