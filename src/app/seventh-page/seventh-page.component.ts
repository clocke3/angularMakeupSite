import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-seventh-page',
  imports: [],
  templateUrl: './seventh-page.component.html',
  styleUrl: './seventh-page.component.css'
})
export class SeventhPageComponent implements AfterViewInit, OnDestroy {
  private intervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
       this.startPictureLoop();
      }, 4000);
    }
  }

  startPictureLoop() {
    setTimeout(() => {
      this.document.getElementById("cushion1").classList.add('out');
    }, 2000);

    setTimeout(() => {
      this.document.getElementById("cushion1").classList.remove('out');
    }, 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
