import { Component, inject } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { CartService } from '../../../core/cart-service/cart.service';
import { Product } from '../../../Interfaces/product';

@Component({
  selector: 'app-cart-component',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.scss'
})
export class CartComponentComponent {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems
  totalCartItems = this.cartService.totalCartItems

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  saveOrder() {
    this.cartService.saveOrder();
  }

}
