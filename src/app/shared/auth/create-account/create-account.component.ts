import { CommonModule } from "@angular/common";
import { Component, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { UserDataService } from "../../services/user-data.service";

@Component({
  selector: 'app-create-account',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule],
  standalone: true,
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  @Input() accountForm!: FormGroup;
  @Output() error: string;

  constructor(private userDataService: UserDataService, private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]
    });
    this.error = '';
  }

  validateNewAccount() {
    console.log('Made it here');
  }
}
