import { Component } from '@angular/core';

import { TabComponent } from '../../components/tabs/tab/tab.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { MyAssessmentsTabComponent } from './assesment-tabs/my-assessments-tab/my-assessments-tab.component';
@Component({
  selector: 'app-assessment',
  standalone: true,
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
  imports: [TabComponent, TabsComponent, MyAssessmentsTabComponent],
})
export class AssessmentComponent {}
