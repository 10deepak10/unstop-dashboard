import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NavGroup } from '../../shared/interfaces/interfaces';
import { IconComponent } from '../../utilities/icon/icon.component';
import { theme } from '../../shared/theme';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass, IconComponent],
  providers: [RouterLink],
})
export class SidebarComponent {
  public iconColor = theme['theme-primary'];
  public iconColorActive = theme['theme-secondary'];
  @Input() navGroups: NavGroup[] = [];
  @Input() showSidebar = signal(false);
  isactive: WritableSignal<string> = signal('/');
  public toggleSidebar(): void {
    this.showSidebar.set(false);
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isactive.set(event.url);
      }
    });
  }
}
