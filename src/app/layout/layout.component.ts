import { Component, Input } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NavGroup } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, HeaderComponent, SidebarComponent],
})
export class LayoutComponent {
 
}
