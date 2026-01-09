import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  message: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc',
      message:
        'EdifyTechSolutions transformed our digital presence. Their expertise and dedication exceeded our expectations. Highly recommended!',
      rating: 5,
      image: 'https://via.placeholder.com/100/7c3aed/ffffff?text=JS'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'E-Commerce Plus',
      message:
        'Outstanding service! The team understood our vision perfectly and delivered results beyond what we anticipated.',
      rating: 5,
      image: 'https://via.placeholder.com/100/ff0055/ffffff?text=SJ'
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Digital Solutions Ltd',
      message:
        'Working with EdifyTechSolutions was a game-changer. Their strategic approach and technical excellence are unmatched.',
      rating: 5,
      image: 'https://via.placeholder.com/100/7c3aed/ffffff?text=MC'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
