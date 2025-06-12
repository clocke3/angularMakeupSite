import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-account',
  imports: [],
  standalone: true,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  constructor(private router: Router, private userDataService: UserDataService) {}

  sessionValue: any;
  user: User;

  ngOnInit() {
    const stored = localStorage.getItem('session');
    this.sessionValue = stored ? JSON.parse(stored) : null;
    this.userDataService.getUserBySession(stored).subscribe(u => {
      if (u) {
        this.user = u;
      }
    });
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
