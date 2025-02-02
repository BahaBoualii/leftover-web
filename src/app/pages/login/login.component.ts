import { Component } from '@angular/core';

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

  onLogin(): void {
    console.log('Login Data:', this.loginData);
    // TODO: Send this data to the backend API.
  }
}
