import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fifth-page',
  standalone: true,
  imports: [],
  templateUrl: './fifth-page.component.html',
  styleUrls: ["../../styles.css", './fifth-page.component.css']
})
export class FifthPageComponent implements AfterViewInit, OnDestroy {
  private intervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
       this.startPictureLoop();
      }, 5000);
    }
  }

  startPictureLoop() {
    setTimeout(() => {
      this.document.getElementById("blush1").classList.add('out');
    }, 1000);

    setTimeout(() => {
      this.document.getElementById("blush2").classList.add('out');
    }, 2000);

    setTimeout(() => {
      this.document.getElementById("blush3").classList.add('out');
    }, 3000);

    setTimeout(() => {
      this.document.getElementById("blush4").classList.add('out');
    }, 4000);

    setTimeout(() => {
      this.document.getElementById("blush1").classList.remove('out');
      this.document.getElementById("blush2").classList.remove('out');
      this.document.getElementById("blush3").classList.remove('out');
      this.document.getElementById("blush4").classList.remove('out');
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
