import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shared/shopping-cart/shopping-cart.component';
import { MainEndpointComponent } from './main-endpoint/main-endpoint.component';

export const routes: Routes = [
    { path: '', component: MainEndpointComponent },
    { path: 'cart', component: ShoppingCartComponent }
];
