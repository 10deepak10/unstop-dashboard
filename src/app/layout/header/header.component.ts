import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { theme } from '../../shared/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [IconComponent],
})
export class HeaderComponent {
  public iconColor = theme['theme-primary'];
  public iconBG = theme['theme-secondary-5'];
  @Input() title: string = 'Title';
  @Output() ctrlMenu = new EventEmitter();
  constructor() {}
  public menuCtrl(): void {
    this.ctrlMenu.emit();
  }
  ngOnInit(): void {}
}
