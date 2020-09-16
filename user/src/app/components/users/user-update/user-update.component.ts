import { IUser } from './../../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  user: IUser;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    const user = this.userService.getUserById(this.id).subscribe(()=> {});
    this.userUpdateForm = this.fb.group
    ({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
    });
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.userUpdateForm.patchValue(this.user);
    });
  }
  updateUser()
  {
    let user = this.userUpdateForm.value;
    this.userService.updateUser(user, this.id).subscribe((data)=> {
      this.router.navigate(['/admin/users']);
    });
  }
}
