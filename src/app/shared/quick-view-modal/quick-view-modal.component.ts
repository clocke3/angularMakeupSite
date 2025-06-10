
import {
  Component,
  effect,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  signal,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import { SessionStateService } from '../services/session.service';

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
  newItem: WritableSignal<any[] | null> = signal(null);
  errors: string[] = [];

  constructor(private session: SessionStateService) {
    effect(() =>{
      if (this.newItem) {
        this.session.newItem = this.newItem;
      }
    })
  }

  close() {
    this.closeEvent.emit();
  }

  addToCart() {
    if (this.productName && this.selectedColor && this.price) {
      const item: any[] = [
        this.productName,
        this.selectedColor,
        this.price
      ];
      this.newItem.set(item);
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
