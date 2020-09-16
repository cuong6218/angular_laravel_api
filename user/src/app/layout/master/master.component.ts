import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  searchForm = new FormGroup({
    keyword: new FormControl(''),
  })
  currentUser: any;
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUserLogin();
    
  }
  logout()
  {
    // localStorage.removeItem('currentUserLogin');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
