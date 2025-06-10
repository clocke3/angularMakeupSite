import { Component } from '@angular/core';
import { QuickViewModalComponent } from "../../shared/quick-view-modal/quick-view-modal.component";


@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [QuickViewModalComponent],
  templateUrl: './product-list-page.component.html',
  styleUrls: ["../../../styles.css", './product-list-page.component.css']
})
export class ProductListPageComponent {
  showComponent = false;
  imageUrl: string;
  productName: string;
  description: string;
  colors: string[];
  price: string;

  display(data: string) {
    if (data === 'blush') {
      this.imageUrl = "assets/images/blush_main.jpg";
      this.productName = 'Pure Flush Powder Blush'
      this.description = "N/A";
      this.colors = [
        '70s Frost',
        'Coral Reef',
        'Natural Flush',
        'Muguet'
      ],
      this.price = "13.00"
    }
    if (data === 'cushion') {
      this.imageUrl = "assets/images/cushion_mock-up 2.jpg";
      this.productName = 'Perfect Match Base Cushion'
      this.description = "N/A";
      this.colors = [
        'Fair',
        'Medium',
        'Olive',
        'Chestnut',
        'Siena',
        'Cocoa'
      ],
      this.price = "25.00"
    }
    if (data === 'lip') {
      this.imageUrl = "assets/images/lip_balm_mock-up.jpg";
      this.productName = 'Pitter Patter Tinted Balm'
      this.description = "N/A";
      this.colors = [
        'Berry',
        'Clear',
        'Tulip',
        'Espresso',
      ],
      this.price = "11.00"
    }
    if (data === 'tote') {
      this.imageUrl = "assets/images/tote_mock-up.jpg";
      this.productName = 'Logo Tote'
      this.description = "N/A";
      this.colors = [
        'White',
      ],
      this.price = "15.00"
    }
    if (data === 'tshirt') {
      this.imageUrl = "assets/images/tshirt_mock-up.jpg";
      this.productName = 'Logo Tee'
      this.description = "N/A";
      this.colors = [
        'Black',
      ],
      this.price = "20.00"
    }
    this.showComponent = true;
  }
}
