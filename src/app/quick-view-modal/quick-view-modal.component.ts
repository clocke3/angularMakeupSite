import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quick-view-modal',
  standalone: true,
  imports: [],
  templateUrl: './quick-view-modal.component.html',
  styleUrl: './quick-view-modal.component.css'
})
export class QuickViewModalComponent {
  @Input() imageUrl!: string;
  @Input() productName!: string;
  @Input() description!: string;
  @Input() colors!: string[];
  @Input() price!: string;

  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }
}
