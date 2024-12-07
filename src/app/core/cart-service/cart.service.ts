import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems: any[] = []; // Armazena os itens do carrinho

  constructor() {}

  // Adiciona um produto ao carrinho
  addToCart(produtos: any) {
    this.cartItems.push(produtos);
    console.log('Produto adicionado ao carrinho:', produtos);
  }

  // Retorna todos os produtos do carrinho
  getCartItems() {
    return this.cartItems;
  }

  // Limpa o carrinho
  clearCart() {
    this.cartItems = [];
    console.log('Carrinho limpo.');
  }
}
