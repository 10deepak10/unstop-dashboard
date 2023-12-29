import { Component } from '@angular/core';
import { CardComponent } from '../../../../components/card/card.component';
import { MetricComponent } from '../../../../components/metric/metric.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { FormModalComponent } from '../../../../layout/form-modal/form-modal.component';
import { IconComponent } from '../../../../utilities/icon/icon.component';
import { theme } from '../../../../shared/styles/theme';

@Component({
  selector: 'my-assessments-tab',
  standalone: true,
  imports: [
    IconComponent,
    MetricComponent,
    CardComponent,
    FormModalComponent,
    ModalComponent,
    FormModalComponent,
  ],
  templateUrl: './my-assessments-tab.component.html',
  styleUrl: './my-assessments-tab.component.scss',
})
export class MyAssessmentsTabComponent {
  formsModal: boolean = false;
  public newIconColor: string = theme['theme-secondary'];
  public newIconBg: string = theme['theme-white'];

  metrics = [
    {
      id: 1,
      title: 'Total Assessment',
      data: [
        {
          icon: {
            name: 'assets/icons/stack.svg',
            bg: theme['accent-purple'],
            color: theme['theme-purple'],
          },
          count: 34,
          action: () => {
            console.log('Metric 1 clicked!');
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Candidates',
      data: [
        {
          icon: {
            name: 'assets/icons/users.svg',
            bg: theme['accent-purple'],
            color: theme['theme-purple'],
          },
          count: 11145,
          extra: 89,
          information: 'Total Candidate',
          action: () => {
            console.log('Metric 1 clicked!');
          },
        },
        {
          count: 114,
          extra: 89,
          information: 'Who Attamped',
        },
      ],
    },
    {
      id: 3,
      title: 'Candidates Source',
      data: [
        {
          icon: {
            name: 'assets/icons/w-link.svg',
            bg: theme['accent-pink'],
            color: theme['theme-pink'],
          },
          count: 11000,
          extra: 89,
          information: 'E-mail',
          action: () => {
            console.log('Metric 1 clicked!');
          },
        },
        {
          count: 1025,
          extra: 89,
          information: 'Social Share',
        },
        {
          count: 4125,
          extra: 89,
          information: 'Unique Link',
        },
      ],
    },
    {
      id: 4,
      title: 'Total Purpose',
      data: [
        {
          icon: {
            name: 'assets/icons/link.svg',
            bg: theme['accent-secondary'],
            color: theme['theme-secondary'],
          },
          count: 11,
          action: () => {
            console.log('Metric 1 clicked!');
          },
        },
      ],
    },
  ];

  cards = [
    {
      id: 1,
      title: 'math assignment',
      type: 'job',
      date: '2023-12-18 9:07:35.435572+00',
      duration: '1 hr',
      totalQuestion: '25',
      userShared: [
        { initial: 'sm' },
        { initial: 'md' },
        { initial: 'dm' },
        { initial: 'lk' },
      ],
    },
    {
      id: 3,
      title: 'D2C assignment',
      type: 'job',
      date: '2023-12-02 11:07:25.435572+00',
      duration: '3 week',
      totalQuestion: '30',
      userShared: [
        { initial: 'dm' },
        { initial: 'kg' },
        { initial: 'sm' },
        { initial: 'mk' },
      ],
    },
    {
      id: 3,
      title: 'english assignment',
      type: 'job',
      date: '2023-12-08 11:07:35.435572+00',
      duration: '2 hr',
      totalQuestion: '30',
      userShared: [
        { initial: 'kg' },
        { initial: 'dm' },
        { initial: 'sm' },
        { initial: 'mk' },
      ],
    },
  ];
  openFormsModal() {
    this.formsModal = true;
  }
  closeFormModal() {
    this.formsModal = false;
  }
}
