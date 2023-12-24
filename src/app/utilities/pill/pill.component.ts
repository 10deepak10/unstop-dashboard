import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { theme } from '../../shared/styles/theme';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pill',
  standalone: true,
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
  imports: [IconComponent, NgIf],
})
export class PillComponent {
  public iconColor = theme['theme-primary'];
  public showPill: boolean = true;
  @Input() name: string = '';
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.showPill = false;
    this.closed.emit();
  }
}
