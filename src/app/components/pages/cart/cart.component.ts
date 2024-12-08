import { Component, inject, Input, Signal } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { CartCardComponent } from "../../layout/cart-card/cart-card.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems
  totalCartItems = this.cartService.totalCartItems

  getTotalPrice(): number {
    const items = this.cartItems();
    if (!items || items.length === 0) {
      return 0; 
    }
    return items.reduce((total, item) => total + item.price, 0);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  saveOrder() {
    this.cartService.saveOrder();
  }

}
