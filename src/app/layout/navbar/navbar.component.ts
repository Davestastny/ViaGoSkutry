import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileNavOpen = false;

  constructor(private router: Router) {}

  toggleNavbarLinks(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
