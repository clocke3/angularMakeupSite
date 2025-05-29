import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fifth-page',
  imports: [],
  templateUrl: './fifth-page.component.html',
  styleUrl: './fifth-page.component.css'
})
export class FifthPageComponent implements AfterViewInit, OnDestroy  {
  private intervalId: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.startPictureLoop();
  }

  startPictureLoop() {
    const elements = ['blush1', 'blush2', 'blush3', 'blush4'];

    this.intervalId = setInterval(() => {
      elements.forEach((id, index) => {
        const el = this.document.getElementById(id);
        if (el) {
          // Reset first
          el.classList.remove('out');

          // Add class with delay
          setTimeout(() => {
            el.classList.add('out');
          }, 1000 * (index + 1));

          // Optionally remove again
          setTimeout(() => {
            el.classList.remove('out');
          }, 1000 * (index + 1) + 2000);
        }
      });
    }, 6000);
  }

  ngOnDestroy() {
    // Clean up interval to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
