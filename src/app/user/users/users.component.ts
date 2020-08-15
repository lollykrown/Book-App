import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.userService.getUsers()
      .subscribe(
        (users: User[]) => this.users = users
      );
  }

}
