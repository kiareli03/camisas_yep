import { Component } from '@angular/core';
import { CartService } from '../../../core/cart-service/cart.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-cart-component',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.scss'
})
export class CartComponentComponent {

  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  // Carrega os itens do carrinho e calcula o total
  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }

  // Remove um item específico do carrinho
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }

  // Limpa o carrinho
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalAmount = 0;
  }

  // Finaliza a compra
  checkout() {
    alert('Compra finalizada com sucesso!');
    this.clearCart();
  }

}
