import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { TabComponent } from '../../components/tabs/tab/tab.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgIf } from '@angular/common';
import { PillsComponent } from '../../components/pills/pills.component';

@Component({
  selector: 'app-assessment',
  standalone: true,
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
  imports: [TabsComponent, TabComponent, ModalComponent, NgIf, PillsComponent],
})
export class AssessmentComponent {
  showModal: boolean = false;
  modalTitle: string = 'Custom Modal';

  constructor() {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
