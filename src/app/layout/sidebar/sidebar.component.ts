import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  Input,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavGroup } from '../../shared/interfaces/interfaces';
import { IconComponent } from '../../utilities/icon/icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass, IconComponent],
})
export class SidebarComponent {
  @Input() navGroups: NavGroup[] = [];
  @Input() showSidebar = signal(false); // for mobile view
  toggleSidebar() {
    this.showSidebar.set(false);
  }
  constructor() {}
  
}
