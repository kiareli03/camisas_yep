import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  
  searchQuery: string = '';
  cartCount: number = 0;

  constructor() {
    // Simulação: Inicializar o carrinho com alguns itens
    this.cartCount = this.getCartCount();
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Implementar a lógica de busca
      console.log('Buscando por:', this.searchQuery);
    }
  }

  getCartCount(): number {
    // Simulação: Retornar a quantidade de itens do carrinho
    // Substitua pelo estado real do carrinho (ex.: localStorage ou serviço)
    return 3;
  }

}
