import { Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  template: `
  <div>
    <div class="content">
      <div id="page" class="mainPage">
      </div>
    </div>
  </div>`,
 styleUrls: ["../../styles.css",'./first-page.component.css'],
})
export class FirstPageComponent {
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
