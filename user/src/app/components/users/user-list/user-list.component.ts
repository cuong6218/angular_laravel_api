import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { IUser } from './../../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  data = [];
  hidden: boolean = true;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }
  deleteUser(id: number)
  {
    if(confirm('Are you sure?'))
    this.userService.delete(id).subscribe((data) => {
      this.users = this.userService.getAll();
    });
  }
}
