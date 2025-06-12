import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../auth/users/user';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const users: User[] = [
    {
      email: 'tmaxwell@yahoo.com',
      password: 'tmaxwell',
      firstName: 'Trixie',
      lastName: 'Maxwell',
      phoneNumber: '000-000-0005',
      created: this.getRandomDate(),
      lastLogin: new Date(),
      loggedIn: false,
      currentSession: '0123456789abcdef',
    },
  ];
  return { users };
}

  getRandomDate() {
    const from = new Date('2025-05-17T01:57:45.271Z');
    const to = new Date();
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }
}
