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
  @Input() loginForm!: FormGroup;
  @Output() error: string;

  constructor(private userDataService: UserDataService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.error = '';
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

  validateAccount(email: string){
    this.userDataService.getUserByEmail(email).subscribe(user => {
      if (user) {
        // reset session data
        user.currentSession = localStorage.getItem('session');
        // redirect to account page
        // this.router.navigate(['/account']);
      } else {
        this.error = 'User Not Found';
      }
    });
  }
}
