
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Product } from '../shopping-cart/product';
import { User } from '../auth/users/user';
import { SessionService } from '../services/sessions/session.service';

@Component({
  selector: 'app-quick-view-modal',
  standalone: true,
  imports: [],
  templateUrl: './quick-view-modal.component.html',
  styleUrl: './quick-view-modal.component.css',
})
export class QuickViewModalComponent {
  @ViewChildren('colorBtn') colorButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  @Input() imageUrl!: string;
  @Input() productName!: string;
  @Input() description!: string;
  @Input() colors!: string[];
  @Input() price!: string;

  @Output() closeEvent = new EventEmitter<void>();
  selectedColor: string | null = null;
  savedColorBtn: HTMLButtonElement | null = null;
  showIcon = false;
  errors: string[] = [];
  sessionValue: string | null = null;
  user: User | null = null;

  constructor(private session: SessionService, private userDataService: UserDataService) {
  }

  ngOnInit() {
    const stored = this.session.getSession();
    this.sessionValue = stored;
    this.userDataService.currentUser$.subscribe(u => {
      if (u?.loggedIn) {
        this.user = u;
      }
    });
  }

  close() {
    this.closeEvent.emit();
  }

  addToUserCart() {
    // grab product
    if (this.productName && this.selectedColor && this.price) {
      const item: Product = {
        name: this.productName,
        color: this.selectedColor,
        price: this.price
    };
    // add item to user cart
      this.user.cart.push(item);

    // close
      this.close();
    } else {
      this.errors.push('Need to select a color!');
    }
  }

  chooseColor(input: string) {

    const elem = this.colorButtons.filter((btn) =>
      btn.nativeElement.textContent
        ?.trim()
        .toLowerCase()
        .includes(input.toLowerCase())
    );

    if (!elem || elem.length === 0) {
      console.warn('No matching button found for:', input);
      return;
    }

    if (this.savedColorBtn) {
      const oldDiv = this.savedColorBtn.querySelector('div');
      if (oldDiv) {
        oldDiv.classList.remove('placeIconInBtn');
      }
      this.showIcon = false;
    }

    const newBtn = elem[0].nativeElement;
    const newDiv = newBtn.querySelector('div');
    if (newDiv) {
      newDiv.classList.add('placeIconInBtn');
    }

    this.selectedColor = input;
    this.savedColorBtn = newBtn;
    this.showIcon = true;
  }
}
