import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../users/user';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [ CommonModule, RouterModule],
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  constructor(private router: Router, private userDataService: UserDataService) {}

  sessionValue: string | null = null;
  user: User | null = null;

  ngOnInit() {
    const stored = localStorage.getItem('session');
    this.sessionValue = stored;
    this.userDataService.currentUser$.subscribe(u => {
      if (u?.loggedIn) {
        this.user = u;
      }
    });
  }

  logout() {
    this.userDataService.currentUser$.subscribe(user => {
      if (user) {
        user.lastLogin = new Date();
        user.loggedIn = false;
        this.userDataService.clearUser();
      }
    }).unsubscribe();
    this.user = null;
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
