import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-deails-component',
  standalone: true,
  imports: [CommonModule,NgFor, FormsModule],
  templateUrl: './product-deails-component.component.html',
  styleUrl: './product-deails-component.component.scss'
})
export class ProductDeailsComponentComponent {

  product = {
    title: 'T-Shirt Masculina Classic',
    price: 49.90,
    description: 'Camiseta clássica, confortável e estilosa. Ideal para qualquer ocasião.',
    image: 'https://via.placeholder.com/400', 
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['#000000', '#FFFFFF', '#FF5733', '#27AE60'],
  };

  selectedSize = this.product.sizes[0];
  selectedColor = this.product.colors[0];

  selectColor(color: string) {
    this.selectedColor = color;
  }

  addToCart() {
    alert(`Produto adicionado ao carrinho: ${this.product.title}`);
  }

}
