import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [NgIf, NgClass, IconComponent],
  animations: [
    trigger('slideInFromBottom', [
      transition(':enter', [
        style({ transform: 'translateX(-50%)  translateY(100%)' }),
        animate(
          '300ms ease-in-out',
          style({ transform: 'translateX(-50%) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in-out',
          style({ transform: 'translateX(-50%) translateY(100%)' })
        ),
      ]),
    ]),
  ],
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
