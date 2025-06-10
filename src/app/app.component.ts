import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
    private cookie: CookieService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS here
      AOS.init();
      this.setSession();
    }
  }

  private sessionValue: string = '';
  private cookieValue: string = '';

  setSession() {
    const randomHex: string = this.createRandomHex();
    localStorage.setItem('session', randomHex);
    this.sessionValue = randomHex;
  }

  getSession() {
    localStorage.getItem('session');
  }

  removeSession() {
    localStorage.removeItem('session');
  }

  clearSession() {
    localStorage.clear();
    this.sessionValue = '';
  }

  setCookie() {
    this.cookie.set('cookie', 'cookie1');
  }

  getCookie() {
    this.cookie.get('cookie');
  }

  removeCookie() {
    this.cookie.delete('cookie');
    this.cookieValue = '';
  }

  createRandomHex() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0'))
      .join('')
      .toString();
  }
}
