import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartKey = 'angularShoppingCart';


  constructor() { }

  addItem(item: CartItem): void {
    const cart: CartItem[] = this.getItems();
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeItem(itemId: string): void {
    let cart = this.getItems();
    const itemIdNumber = Number(itemId);
    cart = cart.filter(item => item.id !== itemIdNumber);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getItems(): CartItem[] {
    const itemsJSON = localStorage.getItem(this.cartKey);
    return itemsJSON ? JSON.parse(itemsJSON) : [];
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
