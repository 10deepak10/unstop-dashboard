import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { TabComponent } from '../../components/tabs/tab/tab.component';
import { CardComponent } from '../../components/card/card.component';
import { MetricComponent } from '../../components/metric/metric.component';
import { theme } from '../../shared/styles/theme';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-library',
  standalone: true,
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
  imports: [
    TabsComponent,
    TabComponent,
    CardComponent,
    MetricComponent,
    ModalComponent,
    NgFor,
  ],
})
export class LibraryComponent {
  public cardUser = [
    { initial: 'kg' },
    { initial: 'dm' },
    { initial: 'sm' },
    { initial: 'mk' },
  ];
  public metric = {
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
    ],
  };
  public showModal: boolean = false;

  closeModal() {
    this.showModal = false;
  }
  cardHtml = `<app-card
    [title]="'Assessment'"
    [type]="'job'"
    date="2023-12-08 11:07:35.435572+00"
    [duration]="'1 hr'"
    [totalQuestion]="'30'"
    [userShared]="[
      { initial: 'kg' },
      { initial: 'dm' },
      { initial: 'sm' },
      { initial: 'mk' },
    ];"
  ></app-card>
`;
  metricHtml = `<app-metric
[title]="metric.title"
[metric]="metric.data"
></app-metric>
`;
  metricTs = `public metric = {
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
  ],
};
`;
  modalHtml = `<button class="btn" (click)="showModal = true">show modal</button>
<app-modal
  title="Custom Modal"
  [showModal]="showModal"
  (closeModalEvent)="closeModal()">
  <div>any desired form or content</div>
  <button modal-footer class="btn">Save</button>
</app-modal>`;
  tabHtml = ` <app-tabs class="page-tabs">
  <app-tab tabTitle="tab-1" [active]="true"> </app-tab>
  <app-tab tabTitle="tab-2"> </app-tab>
  <app-tab tabTitle="other-tab"> </app-tab>
</app-tabs>`;
  cardInputProperties = [
    {
      name: 'icon',
      description: 'Path to the icon image.',
      type: 'string',
      defaultValue: "'assets/icons/case.svg'",
    },
    {
      name: 'title',
      description: 'The title of the card.',
      type: 'string',
      defaultValue: "'title'",
    },
    {
      name: 'type',
      description: 'The type or category of the card.',
      type: 'string',
      defaultValue: "'type'",
    },
    {
      name: 'date',
      description: 'The date associated with the card.',
      type: 'string',
      defaultValue: "''",
    },
    {
      name: 'duration',
      description: 'The duration of an event associated with the card.',
      type: 'string',
      defaultValue: "'00'",
    },
    {
      name: 'totalQuestion',
      description: 'The total number of questions for the card.',
      type: 'string',
      defaultValue: "'00'",
    },
    {
      name: 'userShared',
      description:
        'An array of objects representing avatars and names of users who shared the card.',
      type: 'AvatarI[]',
      defaultValue: '[]',
    },
    {
      name: 'link',
      description: 'The URL link associated with the card.',
      type: 'string',
      defaultValue: "''",
    },
    {
      name: 'iconColor',
      description: 'The color of the card icon.',
      type: 'string',
      defaultValue: "theme['theme-purple']",
    },
    {
      name: 'iconBg',
      description: 'The background color of the card icon.',
      type: 'string',
      defaultValue: "theme['accent-purple']",
    },
  ];
  metricInputProperties = [
    {
      name: 'title',
      description: 'The title of the metric.',
      type: 'string',
      defaultValue: "'Metrics'",
    },
    {
      name: 'metric',
      description: 'An array of metric objects.',
      type: 'MetricI[]',
      defaultValue: '[]',
    },
    {
      name: 'metric.icon',
      description: 'The icon for the metric.',
      type: 'IconI',
      defaultValue: '{ name: "", color: "", bg: "" }',
    },
    {
      name: 'metric.information',
      description: 'The information related to the metric.',
      type: 'string',
      defaultValue: "''",
    },
    {
      name: 'metric.count',
      description: 'The count for the metric.',
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'metric.extra',
      description: 'Additional metric value.',
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'metric.action',
      description: 'Action to be executed when the metric is clicked.',
      type: '() => void',
      defaultValue: '() => {}',
    },
  ];
  ModalInputProperties = [
    {
      name: 'title',
      description: 'The title of the modal.',
      type: 'string',
      defaultValue: "'Modal Title'",
    },
    {
      name: 'showModal',
      description: 'A flag to control the visibility of the modal.',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: '(closeModalEvent)',
      description: 'Event emitted when the modal is closed.',
      type: 'EventEmitter<void>',
    },
  ];
  TabnputProperties = [
    { name: 'tabTitle', description: 'The title of the tab.', type: 'string' },
    {
      name: 'active',
      description: 'Indicates whether the tab is currently active.',
      type: 'boolean',
      defaultValue: 'false',
    },
  ];
}
