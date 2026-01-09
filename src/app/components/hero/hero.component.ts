import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  showModal = false;
  private subscription: Subscription | null = null;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.subscription = this.contactService.showContactModal$.subscribe(
      (show: boolean) => {
        this.showModal = show;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openModal() {
    this.contactService.openContactModal();
  }

  closeModal() {
    this.contactService.closeContactModal();
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }

  submitForm() {
    if (this.formData.name && this.formData.phone && this.formData.email && this.formData.message) {
      const email = 'info@edifytechsolutions.com';
      const subject = 'New Contact Form Submission';
      const body = `
        Name: ${this.formData.name}
        Phone: ${this.formData.phone}
        Email: ${this.formData.email}
        Message: ${this.formData.message}
      `;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.closeModal();
    } else {
      alert('Please fill in all fields');
    }
  }
}


