import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { CardComponent } from '../../card/card.component';
import { ProductsService } from '../../../core/products-service/products.service';
import { CartService } from '../../../core/cart-service/cart.service';

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.scss'
})
export class ProductsComponentComponent {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

    products = this.productsService.products
    isLoading = this.productsService.isLoading

    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }

  




}
