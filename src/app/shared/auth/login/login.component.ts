import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from "@angular/router";
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

  constructor(private userDataService: UserDataService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.validateAccount(email);
      // Add your login logic here
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }

  validateAccount(email: string){
    this.userDataService.getUser(email).subscribe(user => {
      if (user) {
        console.log('we found a user!')
        // reset session data
        // redirect to account page with its data
      } else {
        console.log("user not found")
        // throw errors
      }
    });
  }

  createAccount() {

  }
}
