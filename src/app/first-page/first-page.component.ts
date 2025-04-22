import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  imports: [],
  template:
    `<div>
    <div class="content">
      <!-- main page -->
      <div class="mainPage">
          <img class="logo" [src]="logoUrl" [alt]="logoAlt" [@pulse]>
      </div>
    </div>
  </div>`,
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  logoUrl = "assets/images/ahreumLogo.png";
  logoAlt = "Ahreum logo";
}

