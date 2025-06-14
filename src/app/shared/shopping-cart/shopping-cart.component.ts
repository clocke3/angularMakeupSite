import { Component, computed } from '@angular/core';
import { Product } from './product';
import { User } from '../auth/users/user';
import { UserDataService } from '../services/user-data.service';
import { SessionService } from '../services/sessions/session.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  standalone: true,
})
export class ShoppingCartComponent {
  sessionValue: string | null = null;
  user: User | null = null;
  cart: Product[] | null = null;
  productMap: Map<string, { product: Product; quantity: number }> | null =  null;
  overallPrice: number | null = null;
  constructor(
    private session: SessionService,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    const stored = this.session.getSession();
    this.sessionValue = stored;
    this.userDataService.currentUser$.subscribe((u) => {
      if (u?.loggedIn) {
        this.user = u;
        this.cart = u.cart;
        this.productMap = this.initializeProducts(this.cart);
        this.overallPrice = this.calculateCart(this.productMap);
      }
    });
  }

  initializeProducts(cart: Product[]): Map<string, { product: Product; quantity: number }> {
    const map = new Map();

    for (const product of cart) {
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

  calculateCart(
    productMap: Map<string, { product: Product; quantity: number }>
  ): number {
    let sum = 0;
    for (const { product, quantity } of productMap.values()) {
      sum += Number(product.price) * quantity;
    }
    return sum;
  }
}
