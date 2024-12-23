import { Component, Input, input, output } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports:[],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();
  // amount = input<number>();
  label = input<string>('add to cart');
  select = output();
  @Input() customClass: string = '';

  handleClick() {
    this.select.emit();
  }
}
