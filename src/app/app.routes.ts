import { Routes } from '@angular/router';
import { HomeComponentComponent } from './features/home/home-component/home-component.component';
import { ProductsComponentComponent } from './features/products/products-component/products-component.component';
import { ProductDeailsComponentComponent } from './features/product-details/product-deails-component/product-deails-component.component';
import { CartComponentComponent } from './features/cart/cart-component/cart-component.component';

export const routes: Routes = [

    { path: '', component: HomeComponentComponent }, // Rota padrão
    { path: 'produtos', component: ProductsComponentComponent },
    { path: 'detalhe', component: ProductDeailsComponentComponent },
    { path: 'cart-summary', component: CartComponentComponent },

];
