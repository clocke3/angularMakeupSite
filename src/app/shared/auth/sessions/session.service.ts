import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SessionService {
  private sessionSubject = new BehaviorSubject<string | null>(null);
  session$ = this.sessionSubject.asObservable();

  setSession(): void {
    let sessionValue = localStorage.getItem('session');

    if (sessionValue) {
      sessionValue = JSON.parse(sessionValue);
    } else {
      sessionValue = this.createRandomHex();
      localStorage.setItem('session', JSON.stringify(sessionValue));
    }

    this.sessionSubject.next(sessionValue);
  }

  getSession(): string | null {
    return this.sessionSubject.getValue();
  }

  private createRandomHex(): string {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0'))
      .join('')
      .toString();
  }

  removeSession() {
    localStorage.removeItem('session');
  }

  clearSession() {
    localStorage.clear();
    this.sessionSubject.unsubscribe();
  }
}
