import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private route:Router) {}

  onSignUp() {
    const container = document.getElementById('container');
    if (container) {
      container.classList.add('right-panel-active');
    }
  }

  onSignIn() {
    const container = document.getElementById('container');
    if (container) {
      container.classList.remove('right-panel-active');
    }
  }

  step = 1; // Step 1 for login, Step 2 for 2FA

  // Dummy methods for demo purposes
  login() {
    this.step = 2; // Proceed to 2FA step
  }

  verify2FA() {
    // alert('2FA Verified!');
    // Redirect to dashboard
    // [routerLink]="['/dashboard']"
    this.route.navigate(['/dashboard']);

  }
}
