import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CardComponent } from '../../layout/card/card.component';
import { ProductsService } from '../../../services/products/products.service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productsService = inject(ProductsService);

  products = toSignal(this.productsService.getProducts());
  isLoading = computed(() => !this.products());
}
