import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }

}
