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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    console.log('Login Data:', this.loginData);
    // TODO: Send this data to the backend API.
    this.authService.login();
    this.router.navigate(['/surprise-bags']);
  }
}
