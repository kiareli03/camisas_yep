import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  totalCartItems = this.cartService.totalCartItems;
}
