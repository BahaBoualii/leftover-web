import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  signupData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: ''
  }

  errorMessage = '';
  isLoading = false; 

  constructor(
      private authService: AuthService, 
      private router: Router
    ) {}

    onSignup(): void {
      this.isLoading = true;
      this.errorMessage = '';
  
      this.authService.register(this.signupData).subscribe({
        next: () => {
          this.router.navigate(['/login']);
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
}
