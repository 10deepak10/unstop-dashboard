import { Component, Input } from '@angular/core';
import { IconComponent } from '../../utilities/icon/icon.component';
import { DecimalPipe, NgFor, NgIf, NgStyle } from '@angular/common';

interface IconI {
  name: string;
  color: string;
  bg: string;
}
export interface MetricI {
  icon?: IconI;
  information?: string;
  count?: number;
  extra?: number;
  action?: () => void;
}
@Component({
  selector: 'app-metric',
  standalone: true,
  templateUrl: './metric.component.html',
  styleUrl: './metric.component.scss',
  imports: [IconComponent, NgIf, NgFor, DecimalPipe, NgStyle],
})
export class MetricComponent {
  @Input() title: string = 'Metrics';
  @Input() metric: MetricI[] = [];
}
