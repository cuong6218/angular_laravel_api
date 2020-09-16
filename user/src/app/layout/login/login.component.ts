
import { AuthService } from './../../services/auth.service';
import { IUser } from './../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: IUser;
  error: string;
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
  login()
  {
    let data = this.loginForm.value;
    if(this.auth.isLogin(data))
    {
      console.log('successful');
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Wrong email and password.';
      this.router.navigate(['/login']);
    }
    
  }
}
