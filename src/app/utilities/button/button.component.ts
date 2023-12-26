import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NgIf } from '@angular/common';
import { theme } from '../../shared/styles/theme';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [IconComponent, NgIf],
})
export class ButtonComponent {
  active = false;
  @Input() title!: string;
  @Input() icon!: string;
  @Input() bg!: string;
  @Input() color: string = theme['theme-primary'];
  @Input() colorActive: string = theme['theme-secondary'];
  @Input() bgHover: string = theme['theme-accent'];
  @Input() colorHover!: string;
  @Input() border: boolean = true;
  @Input() rounded: 'none' | 'full' | 'sm' | 'md' = 'none';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
