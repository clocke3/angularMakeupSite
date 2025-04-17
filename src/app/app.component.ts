import { Component } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from "./second-page/second-page.component";
import { ThirdPageComponent } from "./third-page/third-page.component";

@Component({
  selector: 'app-root',
  imports: [FirstPageComponent, SecondPageComponent, ThirdPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'makeupWebsite';
}
