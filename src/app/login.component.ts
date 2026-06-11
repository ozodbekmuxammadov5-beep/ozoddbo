import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  submit() {
    this.errorMessage = '';
    if (!this.username || !this.password) {
      this.errorMessage = 'Username va parolingizni kiriting.';
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}
