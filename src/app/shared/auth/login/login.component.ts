import { CommonModule } from "@angular/common";
import { Component, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { UserDataService } from "../../services/user-data.service";

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  error: string = '';

  constructor(private userDataService: UserDataService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.validateAccount(email);
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }

  validateAccount(email: string) {
    this.userDataService.getUserByEmail(email).subscribe(user => {
      if (user) {
        user.currentSession = localStorage.getItem('session');
        user.loggedIn = true;
        this.userDataService.setUser(user);
        this.router.navigate(['/account']);
      } else {
        this.error = 'User Not Found';
      }
    });
  }
}
