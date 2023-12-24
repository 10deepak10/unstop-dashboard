import { Component } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { MetricComponent, MetricI } from '../../components/metric/metric.component';
import { theme } from '../../shared/styles/theme';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [IconComponent, MetricComponent],
})
export class DashboardComponent {
  metric:MetricI[] = [
    {
      icon: {
        name: 'assets/icons/stack.svg',
        bg: theme['accent-purple'],
        color: theme['theme-purple'],
      },
      count: 34,
      extra: 12,
      information: 'Total Candidate',
      action:() => {
        console.log('Metric 1 clicked!');
      },
    },
    {
      count: 3443121,
      extra: 12,
      information: 'Total Candidate',
    },
  ];
}
