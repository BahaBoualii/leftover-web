import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-registration',
  templateUrl: './store-registration.component.html',
  styleUrls: ['./store-registration.component.css']
})
export class StoreRegistrationComponent {
  store = {
    name: '',
    category: '',
    address: '',
    phone: ''
  };

  private apiUrl = 'http://localhost:3000/stores'; // Adjust API URL

  constructor(private http: HttpClient, private router: Router) {}

  registerStore() {
    const userId = localStorage.getItem('userId'); // Get logged-in user ID
    if (!userId) {
      alert('You must verify your account before registering a store.');
      return;
    }

    const storeData = { ...this.store, ownerId: userId };

    this.http.post(`${this.apiUrl}/register`, storeData).subscribe({
      next: () => {
        alert('Store registered successfully! Pending approval.');
        this.router.navigate(['/store-admin/dashboard']); // Redirect to store dashboard
      },
      error: (err) => {
        console.error('Error registering store:', err);
        alert('Failed to register store. Please try again.');
      }
    });
  }
}
