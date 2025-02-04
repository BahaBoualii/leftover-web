import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isProfileDropdownOpen = false;
  isCartOpen = false;
  cart: any[] = [];
  userRole: string = '';

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole(); // Assume this method exists
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
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

  logout(): void {
    this.authService.performLogout();
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
