import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage = '';
  isLoading = false;  // Add this property

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin(): void {
    this.isLoading = true;  // Set loading state when login starts
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        this.handleLoginSuccess(response.user.role);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Login failed. Please try again.';
        this.isLoading = false;  // Reset loading state on error
      },
      complete: () => {
        this.isLoading = false;  // Reset loading state when done
      }
    });
  }

  private handleLoginSuccess(role: string): void {
    switch(role.toLowerCase()) {
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'store_admin':
        this.router.navigate(['/store-admin/dashboard']);
        break;
      case 'user':
        this.router.navigate(['/stores']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}