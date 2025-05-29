import { Component, ElementRef, HostListener, ViewChild, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-first-page',
  imports: [],
  template: `
  <div>
    <div class="content">
      <div id="page" class="mainPage">
        <img class="logo" [src]="logoUrl" [alt]="logoAlt" />
      </div>
    </div>
  </div>`,
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {
  logoUrl = 'assets/images/ahreumLogo.png';
  logoAlt = 'Ahreum logo';
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll')
  onScroll() {
    const elem = this.document.getElementById("page");
    if (window.pageYOffset > 200) {
      elem.classList.remove('bringBack');
      elem.classList.add('fadeOut');
    }

    if (window.pageYOffset < 200) {
      elem.classList.remove('fadeOut');
      elem.classList.add('bringBack');
    }
  }
}
