import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Website Design',
      description: 'Build modern, user-first websites that reflect your brand and drive results.',
      icon: 'website-design.png'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Launch mobile-ready online stores for seamless shopping and better sales.',
      icon: 'ecommerce-website.png'
    },
    {
      title: 'SEO Services',
      description: 'Boost visibility and traffic with targeted, up-to-date SEO strategies.',
      icon: 'seo-services.png'
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications that engage users and drive growth.',
      icon: 'mobile-app-development.png'
    }
  ];
}
