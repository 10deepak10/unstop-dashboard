import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavGroup } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarWidth = '8.75rem';
  @Input() navGroups: NavGroup[] = [];
  // toggleSidebarWidth() {
  //   this.sidebarWidth = this.sidebarWidth == '8.75rem' ? '3rem' : '8.75rem';
  // }
  constructor(private route: Router) {}
}
