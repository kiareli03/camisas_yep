import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient = inject(HttpClient);
  private products!: Product[]; 

  getProducts(): Observable<Product[]> {
    if (this.products) return of(this.products);

    return this.httpClient.get<Product[]>('http://localhost:3000/products').pipe(
      tap(products => this.products = products)
    );
  }

  getProductsById(id: string): Observable<Product> {
    if (this.products) return of(this.products.find(product => product.id === id)!);

    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`)
  }

}
