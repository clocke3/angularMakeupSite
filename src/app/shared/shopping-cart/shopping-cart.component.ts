import { Component, computed, effect, inject } from '@angular/core';
import { Product } from './product';
import { SessionStateService } from '../services/session.service';


@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  standalone: true,
})
export class ShoppingCartComponent {
  private session = inject(SessionStateService);
  readonly cartItems = this.session.cartItems;
  readonly productMap = computed(() => this.initializeProducts(this.cartItems()));
  readonly overallPrice = computed(() => this.calculateCart(this.productMap()));

  constructor() {
    effect(() => {
      const newItem = this.session.newItem();
      if (newItem !== null) {
        this.updateCart(newItem);
        queueMicrotask(() => this.session.newItem.set(null));
      }
    });
  }

  updateCart(item: any[]) {
    const foundProduct: Product = {
      name: item[0],
      color: item[1],
      price: item[2],
    };
    this.session.cartItems.update((current) => [...current, foundProduct]);
  }

 initializeProducts(cartItems: Product[]): Map<string, { product: Product; quantity: number }> {
  const map = new Map();

  for (const product of cartItems) {
    const key = `${product.name}::${product.color}`;
    if (map.has(key)) {
      map.get(key)!.quantity += 1;
    } else {
      if (!key.includes('undefined')) {
        map.set(key, { product, quantity: 1 });
      }
    }
  }

  return map;
}

calculateCart(productMap: Map<string, { product: Product; quantity: number }>): number {
  let sum = 0;
  for (const { product, quantity } of productMap.values()) {
    sum += Number(product.price) * quantity;
  }
  return sum;
}
}
