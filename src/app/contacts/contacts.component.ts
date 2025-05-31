import { Component, Inject } from '@angular/core';
import { QuickViewModalComponent } from "../quick-view-modal/quick-view-modal.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
