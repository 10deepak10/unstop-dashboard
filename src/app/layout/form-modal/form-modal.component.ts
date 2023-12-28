import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { ModalComponent } from '../../components/modal/modal.component';
import { PillComponent } from '../../utilities/pill/pill.component';

@Component({
  selector: 'form-modal',
  standalone: true,
  imports: [ModalComponent, NgIf, NgFor, PillComponent, ReactiveFormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss',
})
export class FormModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  modalTitle: string = 'Create new assessment';

  myForm!: FormGroup;
  skills: string[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      test_purpose: ['other', [Validators.required]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
      duration: ['', [Validators.required]],
      skills: [this.skills, [this.minPills(3)]],
    });
  }
  minPills(min: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const length = control.value.length;
      return length < min ? { minPills: { value: length } } : null;
    };
  }
  submitForm(): void {
    if (this.myForm.valid) {
      console.log('Form submitted with data:', this.myForm.value);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
  addSkill(event: any): void {
    const inputValue: string = event.target.value.trim();

    if (inputValue !== '') {
      this.skills.push(inputValue);
      this.myForm.get('skills')!.setValue(this.skills);
      event.target.value = '';
    }
  }
  removeSkill(index: number): void {
    this.skills.splice(index, 1);
  }
}
