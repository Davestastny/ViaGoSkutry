import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model'; // Předpokládá, že CartItem je ve správné cestě
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {}

  navigateToProductDetail(slug: string): void {
    this.router.navigate(['/product-detail', slug]);
  }

  addToCart(event: MouseEvent): void {
    event.stopPropagation(); // Zabráníme šíření události dále

    const itemToAdd: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1
    };
    this.shoppingCartService.addItem(itemToAdd);
    Notify.success('Produkt byl přidán do košíku.');
  }
}
