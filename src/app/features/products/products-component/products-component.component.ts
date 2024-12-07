import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../core/cart-service/cart.service';

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.scss'
})
export class ProductsComponentComponent {

  produtos = [
    {
      id: 1,
      nome: 'Camiseta Básica',
      preco: 49.99,
      descricao: 'Camiseta 100% algodão, confortável e ideal para o dia a dia.',
      cores: ['#000', '#fff', '#f00'],
      imagem: 'images/camisetas/camiseta1.jpg'
    },
    {
      id: 2,
      nome: 'Camiseta Estampada',
      preco: 69.99,
      descricao: 'Camiseta com estampa moderna e estilo único.',
      cores: ['#ff5733', '#33c3ff', '#8e44ad'],
      imagem: 'images/camisetas/camiseta2.jpg'
    },
    {
      id: 3,
      nome: 'Camiseta Slim Fit',
      preco: 89.99,
      descricao: 'Modelo ajustado ao corpo, ideal para ocasiões casuais.',
      cores: ['#28a745', '#ffc107', '#343a40'],
      imagem: 'images/camisetas/camiseta3.jpg'
    },
    {
      id: 4,
      nome: 'Camiseta Premium',
      preco: 119.99,
      descricao: 'Feita com materiais de alta qualidade e design exclusivo.',
      cores: ['#ff1493', '#1e90ff', '#228b22'],
      imagem: 'images/camisetas/camiseta1.jpg'
    }
  ];

  

  constructor(private cartService: CartService) {}

  // Método para adicionar um produto ao carrinho
  addToCart(produtos: any) {
    this.cartService.addToCart(produtos);
    ;
  }


}
