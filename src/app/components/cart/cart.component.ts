import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.shoppingCartService.getItems();
  }

  removeFromCart(itemId: string) {
    this.shoppingCartService.removeItem(itemId);
    this.loadCartItems();
  }

  clearCart() {
    this.shoppingCartService.clearCart();
    this.loadCartItems();
  }
}
