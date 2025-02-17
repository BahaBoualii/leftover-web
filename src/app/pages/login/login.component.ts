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
  isLoading = false; 

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log(response);
        this.handleLoginSuccess(response.user.roles);
        console.log(response.user.roles);
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
    console.log("role is: ", role); 
    switch(role) {
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