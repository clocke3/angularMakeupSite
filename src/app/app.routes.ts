import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shared/shopping-cart/shopping-cart.component';
import { MainEndpointComponent } from './main-endpoint/main-endpoint.component';
import { AccountComponent } from './shared/auth/accounts/account.component';

export const routes: Routes = [
    { path: '', component: MainEndpointComponent },
    { path: 'account', component: AccountComponent },
    { path: 'cart', component: ShoppingCartComponent }
];
