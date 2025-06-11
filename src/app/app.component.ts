import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from './shared/auth/sessions/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'makeupWebsite';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sessionService: SessionService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  ngOnInit() {
    this.sessionService.setSession();
  }
}
