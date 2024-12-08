import { Component, input, output } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent {

  product = input.required<Product>();
  // amount = input<number>();
  label = input<string>('add to cart');
  select = output();
  

  handleClick() {
    this.select.emit();
  }



}
