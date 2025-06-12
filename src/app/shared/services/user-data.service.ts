import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/users/user';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(email: string): Observable<User> {
    const url = `${this.apiUrl}?email=${encodeURIComponent(email)}`;
    return this.http.get<User[]>(url).pipe(
      map(users => users[0]) // Return the first match or undefined
    );
  }

  createUser(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateItem(user: User): void {
    this.http.put(this.apiUrl, user).subscribe();
  }
}
