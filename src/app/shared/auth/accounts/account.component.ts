import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../sessions/session.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  sessionValue: any;

  ngOnInit() {
    const stored = localStorage.getItem('session');
    this.sessionValue = stored ? JSON.parse(stored) : null;
  }
}
