import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users = this.userService.getAll();
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group
    ({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    })
  }
  register()
  {
    console.log(this.registerForm.value);
    // this.userService.register(this.registerForm.value);
    this.router.navigate(['/login']);
    
  }
} 
