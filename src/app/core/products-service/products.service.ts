import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../../Interfaces/product';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private httpClient = inject(HttpClient);
 products = toSignal<Product[]>(this.getProducts());
 isLoading = computed(() => !this.products());

 getProducts(): Observable<Product[]> {
  return this.httpClient.get<Product[]>('http://localhost:3000/produtos');
 }
  
}
