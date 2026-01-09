import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyLinks: FooterLink[] = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  servicesLinks: FooterLink[] = [
    { label: 'Website Design', href: '#' },
    { label: 'E-Commerce Solutions', href: '#' },
    { label: 'SEO Services', href: '#' },
    { label: 'Mobile App Development', href: '#' }
  ];

  socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' }
  ];
}
