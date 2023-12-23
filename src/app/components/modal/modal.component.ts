import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { theme } from '../../shared/theme';
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
  public iconBg = theme['accent-red'];
  public iconColor = theme['theme-red'];
  @Input() title: string = 'Modal Title';
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  public closeModal(): void {
    this.closeModalEvent.emit();
  }

  public stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
