import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupData = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: ''
  };

  onSignup(): void {
    console.log('Signup Data:', this.signupData);
    // TODO: Send this data to the backend API.
  }
}
