import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user';

@Component({
  selector: 'app-account',
  imports: [],
  standalone: true,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  constructor(private router: Router) {}

  sessionValue: any;
  user: User;

  ngOnInit() {
    const stored = localStorage.getItem('session');
    this.sessionValue = stored ? JSON.parse(stored) : null;
  }

  goToLoginPage() {
    console.log('Navigating to login...');
    this.router.navigate(['/login']);
  }
}
