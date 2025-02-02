import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leftover';

  constructor(private router: Router) {}

  showHeader(): boolean {
    const noHeaderRoutes = ['/', '/login', '/signup']; // Add routes where header should be hidden
    return !noHeaderRoutes.includes(this.router.url);
  }
}
