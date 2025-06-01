import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ShoppingCartComponent } from './app/shared/shopping-cart/shopping-cart.component';
import { MainEndpointComponent } from './app/main-endpoint/main-endpoint.component';

import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
