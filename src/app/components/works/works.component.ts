import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Work {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-works',
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  works: Work[] = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'Web Development',
      description: 'Complete redesign and optimization of an e-commerce platform resulting in 45% increase in conversion rates.',
      image: '/ecommerce-website.png',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App Development',
      description: 'Full-stack mobile banking application with advanced security features and seamless user experience.',
      image: '/mobile-app-development.png',
      link: '#'
    },
    {
      title: 'SEO & Content Marketing Campaign',
      category: 'SEO Services',
      description: 'Comprehensive SEO overhaul increasing organic traffic by 250% within 6 months.',
      image: '/seo-services.png',
      link: '#'
    },
    {
      title: 'Corporate Website Redesign',
      category: 'Website Design',
      description: 'Modern, responsive website design for a Fortune 500 company with improved user engagement.',
      image: '/website-design.png',
      link: '#'
    },
    {
      title: 'SaaS Dashboard Development',
      category: 'Web Development',
      description: 'Interactive SaaS analytics dashboard used by 10,000+ daily active users.',
      image: '/ecommerce-website.png',
      link: '#'
    },
    {
      title: 'Healthcare Mobile Solution',
      category: 'Mobile App Development',
      description: 'HIPAA-compliant mobile health management app connecting patients with healthcare providers.',
      image: '/mobile-app-development.png',
      link: '#'
    }
  ];
}
