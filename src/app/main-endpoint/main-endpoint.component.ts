import { Component } from '@angular/core';
import { FirstPageComponent } from '../first-page/first-page.component';
import { SecondPageComponent } from '../second-page/second-page.component';
import { ThirdPageComponent } from '../third-page/third-page.component';
import { FourthPageComponent } from '../fourth-page/fourth-page.component';
import { FifthPageComponent } from '../fifth-page/fifth-page.component';
import { SixthPageComponent } from '../sixth-page/sixth-page.component';
import { SeventhPageComponent } from '../seventh-page/seventh-page.component';
import { ProductListPageComponent } from '../product-list-page/product-list-page.component';
import { ContactsComponent } from '../contacts/contacts.component';

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
