import { Component, Input } from '@angular/core';
import { theme } from '../../shared/styles/theme';

export interface AvatarI {
  src?: string;
  initial?: string;
  bg?: string;
}

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() initial?: string;
  @Input() bg?: string;
  private colors: string[] = [
    theme['theme-purple'],
    theme['theme-pink'],
    theme['theme-blue'],
    theme['theme-success'],
  ];
  ngOnInit() {
    // Check if bg is not provided, then assign a random color
    if (!this.bg) {
      this.bg = this.getRandomColor();
    }
  }
  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}
