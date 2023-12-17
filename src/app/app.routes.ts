import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  {
    path: 'assessment',
    component: AssessmentComponent,
    data: { title: 'Assessment' },
  },
];
