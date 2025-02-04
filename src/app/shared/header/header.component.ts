import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  isProfileDropdownOpen = false;
  isCartOpen = false;
  cart: any[] = [];
  userRole: string = '';
  private authSubscription: Subscription | null = null;

  ngOnInit() {
    // Initial role check
    this.updateUserRole();

    // Subscribe to auth changes
    this.authSubscription = this.authService.authChanged.subscribe(() => {
      this.updateUserRole();
    });
  }

  updateUserRole() {
    this.userRole = this.authService.getUserRole();
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.performLogout();
  }

  toggleProfileDropdown(event: Event): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isCartOpen = false;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  closeDropdowns(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown-btn') && !target.closest('.dropdown-menu')) {
      this.isProfileDropdownOpen = false;
    }

    if (!target.closest('.cart-btn') && !target.closest('.cart-dropdown')) {
      this.isCartOpen = false;
    }
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
    this.isProfileDropdownOpen = false;
  }


  checkout(): void {
    alert('Checkout successful!');
    this.cart = []; // Clear the cart
    this.isCartOpen = false;
  }

  addToCart(item: any): void {
    this.cart.push(item);
    alert(`${item.name} added to the cart.`);
  }
}
