import { Component } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [IconComponent],
})
export class DashboardComponent {}
