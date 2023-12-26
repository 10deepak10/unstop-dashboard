import { Component, Input } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { theme } from '../../shared/styles/theme';
import { ButtonComponent } from '../../utilities/button/button.component';
import {
  AvatarComponent,
  AvatarI,
} from '../../utilities/avatar/avatar.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [IconComponent, ButtonComponent, AvatarComponent, DatePipe],
})
export class CardComponent {
  @Input() icon: string = 'assets/icons/case.svg';
  @Input() title: string = 'title';
  @Input() type: string = 'type';
  @Input() date: string = 'type';
  @Input() duration: string = '00';
  @Input() totalQuestion: string = '00';
  @Input() userShared: AvatarI[] = [];
  @Input() link: string = '';
  @Input() iconColor: string = theme['theme-purple'];
  @Input() iconBg: string = theme['accent-purple'];
  Iconcolor = theme['theme-primary'];
}
