import { Component, input, output } from '@angular/core';
import { Product } from '../../Interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();
  amount = input<number>();
  label = input<string>('add to cart');
  select = output();

  handleClick() {
    this.select.emit();
  }
}
