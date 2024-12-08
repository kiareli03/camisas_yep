import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products/products.service';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  params$ = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.productsService.getProductsById(id)),
  );
  product = toSignal(this.params$);
  isLoading = computed(() => !this.product());

  selectedColor = signal('');
  selectedSize = signal('');
  isOptionsValid = computed(() => Boolean(this.selectedColor()) && Boolean(this.selectedSize()));
  
  selectSize(event: Event) {
    const element = event.target as HTMLSelectElement;
    console.log(element.value);
  }

  addToCart() {
    const selectedColor = this.selectedColor();
    const selectedSize = this.selectedSize();

    this.cartService.addToCart({ ...this.product()!, selectedColor, selectedSize });
  }
}
