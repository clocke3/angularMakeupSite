import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { SecondPageComponent } from "./second-page/second-page.component";
import { SeventhPageComponent } from './seventh-page/seventh-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { ThirdPageComponent } from "./third-page/third-page.component";

@Component({
  selector: 'app-root',
  imports: [
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    ProductListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'makeupWebsite';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS here
      AOS.init();
    }
  }
}
