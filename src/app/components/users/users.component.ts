import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  onSubmit(ngForm : NgForm): void {
    this.userService.saveUser(ngForm.value);
  }

}
