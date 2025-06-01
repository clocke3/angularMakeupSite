import { Component } from '@angular/core';
import { FirstPageComponent } from '../pages/first-page/first-page.component';
import { SecondPageComponent } from '../pages/second-page/second-page.component';
import { ThirdPageComponent } from '../pages/third-page/third-page.component';
import { FourthPageComponent } from '../pages/fourth-page/fourth-page.component';
import { FifthPageComponent } from '../pages/fifth-page/fifth-page.component';
import { SixthPageComponent } from '../pages/sixth-page/sixth-page.component';
import { SeventhPageComponent } from '../pages/seventh-page/seventh-page.component';
import { ProductListPageComponent } from '../pages/product-list-page/product-list-page.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';

@Component({
  selector: 'app-main-endpoint',
  standalone: true,
  imports: [
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    ProductListPageComponent,
    ContactsComponent
  ],
  templateUrl: './main-endpoint.component.html',
  styleUrl: './main-endpoint.component.css'
})
export class MainEndpointComponent {

}
