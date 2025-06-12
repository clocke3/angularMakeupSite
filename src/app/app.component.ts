import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SessionService } from './shared/services/sessions/session.service';
import { UserDataService } from './shared/services/user-data.service';
import { User } from './shared/auth/users/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'makeupWebsite';
  users: User[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sessionService: SessionService,
    private userDataService: UserDataService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  ngOnInit() {
    this.setSession();
    this.getUsers();
  }

  setSession(): void {
    this.sessionService.setSession();
  }

  getUsers(): void {
    this.userDataService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }
}
