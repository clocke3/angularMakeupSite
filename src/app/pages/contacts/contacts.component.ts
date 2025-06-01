import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
