import { IUser } from './../../../interfaces/iuser';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userAddForm: FormGroup;
  
  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    const users = this.userService.getAll();
    this.userAddForm = this.fb.group
    ({
      firstName: ['', [Validators.required]], 
      lastName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  get firstName()
  {
    return this.userAddForm.get('firstName');
  }
  get lastName()
  {
    return this.userAddForm.get('lastName');
  }
  get email()
  {
    return this.userAddForm.get('email');
  }
  get password()
  {
    return this.userAddForm.get('password');
  }
  addUser()
  {
    let user = this.userAddForm.value;
    this.userService.register(user)
                    .subscribe(()=>{
                      this.router.navigate(['/admin/users']);
                    });
  }

}
