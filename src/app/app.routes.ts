import { Routes } from '@angular/router';
import { CartComponent } from './components/pages/cart/cart.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent }, // Rota padrão
    { path: 'produtos', component: ProductsComponent },
    { path: 'produtos/:id', component: ProductDetailsComponent },
    { path: 'carrinho', component: CartComponent },
    { path: '**', redirectTo: '/' },
];
