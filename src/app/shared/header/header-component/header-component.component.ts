import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/cart-service/cart.service';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  private cartService = inject(CartService);
  totalCartItems = this.cartService.totalCartItems;

}
