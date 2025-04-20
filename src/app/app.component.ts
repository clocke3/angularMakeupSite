import { Component } from '@angular/core';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { SecondPageComponent } from "./second-page/second-page.component";
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { ThirdPageComponent } from "./third-page/third-page.component";

@Component({
  selector: 'app-root',
  imports: [
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'makeupWebsite';
}
