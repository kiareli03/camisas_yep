import { Component, inject } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { CardComponent } from '../../layout/card/card.component';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems
  totalCartItems = this.cartService.totalCartItems

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  saveOrder() {
    this.cartService.saveOrder();
  }

}
