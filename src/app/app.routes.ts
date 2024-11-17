import { Routes } from '@angular/router';
import { HomeComponentComponent } from './features/home/home-component/home-component.component';
import { ProductsComponentComponent } from './features/products/products-component/products-component.component';

export const routes: Routes = [

    { path: '', component: HomeComponentComponent },
    { path: 'produtos', component: ProductsComponentComponent }


];
