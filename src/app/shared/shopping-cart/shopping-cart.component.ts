import { Component, computed, effect, Input, WritableSignal } from '@angular/core';
import { Product } from './product';
import { SessionStateService } from '../services/session.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  standalone: true,
})
export class ShoppingCartComponent {
  @Input() products: Product[];

  constructor(private session: SessionStateService) {
    effect(() => this.updateCart(this.session.newItem, this.session.cartItems));
  }

  updateCart(item: WritableSignal<any[]>, cart: WritableSignal<Product[]>) {
    const newItem: any[] = item();
    const foundProduct: Product = {
      name: newItem[0],
      color: newItem[1],
      price: newItem[2],
    }
    cart.update(current => [...current, foundProduct]);
  }
}
