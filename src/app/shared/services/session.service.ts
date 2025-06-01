import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../shopping-cart/product';

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {
  userData: WritableSignal<any> = signal(null);
  cartItems: WritableSignal<Product[]> = signal([]);
  newItem: WritableSignal<any[]> = signal([]);
}
