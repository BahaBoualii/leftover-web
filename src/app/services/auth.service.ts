import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl ='http://localhost:3000';

  constructor(private readonly http: HttpClient , private readonly router: Router) {}

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('user', JSON.stringify(response.user));
        })
      );
  }

  getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user);
    console.log(user.roles);
    return user.roles || '';
  }

  // Check if user's role is allowed for the route
  hasRequiredRole(allowedRoles: string[]): boolean {
    const userRole = this.getUserRole();
    return allowedRoles.includes(userRole);
  }


  //not Secure gotta be changed + adding logout 
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token exists, redirect to login or handle appropriately
      this.router.navigate(['/login']);
      return EMPTY;
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post(`${this.apiUrl}/auth/logout`, {}, { 
      headers, 
      withCredentials: true 
    }).pipe(
      catchError(error => {
        console.error('Logout error:', error);
        // Handle logout error (e.g., force logout, show message)
        localStorage.clear();
        this.router.navigate(['/login']);
        return EMPTY;
      })
    );
  }
  
  performLogout(): void {
    this.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      error: () => {
        // Fallback logout handling
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
  

  
}