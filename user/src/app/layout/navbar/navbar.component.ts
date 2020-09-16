import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUserLogin: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserLogin = this.authService.getCurrentUserLogin();
  }

}
