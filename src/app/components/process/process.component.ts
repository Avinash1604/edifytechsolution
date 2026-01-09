import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps: ProcessStep[] = [
    {
      title: 'Ideate',
      description:
        'We collaborate closely with stakeholders to understand business objectives, challenges, and user needs. Our team defines clear requirements and a strategic roadmap aligned to measurable outcomes.',
      icon: '/ideate.png'
    },
    {
      title: 'Develop',
      description:
        'Our engineering teams build robust, secure, and scalable solutions using modern technologies and best practices. Quality, performance, and maintainability are embedded throughout the development lifecycle.',
      icon: '/develop.png'
    },
    {
      title: 'Design',
      description:
        'We translate ideas into intuitive, scalable, and user-centric designs. Our approach focuses on usability, performance, and architectural soundness to ensure long-term value.',
      icon: '/website-design.png'
    },
    {
      title: 'Results',
      description:
        'We deliver reliable solutions that drive tangible business impact. Post-delivery, we support optimization, scalability, and continuous improvement to ensure sustained success.',
      icon: '/our-process.png'
    }
  ];
}
