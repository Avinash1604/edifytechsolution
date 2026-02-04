import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  details?: string[];
  fullDescription?: string;
  models?: string[];
}

interface ServiceCategory {
  name: string;
  intro: string;
  services: Service[];
  models?: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  selectedService: Service | null = null;

  services: Service[] = [
    {
      title: 'Website Design',
      description: 'Build modern, user-first websites that reflect your brand and drive results.',
      icon: 'website-design.png',
      fullDescription: `Edify Tech Solutions is a leading web design company in India, blending cutting-edge technology with creative innovation to deliver visually compelling, high-performance websites. Our responsive and user-centric designs are crafted to engage audiences, boost conversions, increase revenue, and support your overall business goals.

In today's digital-first landscape, exceptional web design is essential to stand out and drive measurable business growth. If you're looking to maximize brand visibility and ROI, Edify Tech Solutions is your trusted partner in building impactful, future-ready digital experiences.`,
      details: [
        'Custom Website Design - Leverage expertise in custom web development to strengthen digital presence with innovative, visually engaging websites that reflect brand identity.',
        'Responsive Web Design - Build websites that perform seamlessly on every device, driving stronger engagement and superior user experiences.',
        'Search Engine Optimization - Design visually stunning, SEO-optimized websites that increase discoverability and drive organic traffic.',
        'Secure (HTTPS) Integration - Prioritize secure connections to build user trust and protect sensitive data.',
        'Professional Website Styling - Deliver visually compelling websites that attract attention and strengthen brand identity.',
        'Advanced Functionality - Offer powerful e-commerce integration and custom features to elevate performance and drive online growth.'
      ]
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Launch mobile-ready online stores for seamless shopping and better sales.',
      icon: 'ecommerce-website.png',
      fullDescription: `In today's connected digital economy, e-commerce is a powerful driver of business growth. At Edify Tech Solutions, we help businesses capitalize on this opportunity by delivering robust, scalable e-commerce solutions that streamline operations, enhance customer engagement, and increase revenue. From private commercial platforms to solutions integrated with public administration systems, we design and implement e-commerce models that are secure, efficient, and built to deliver measurable results.`,
      models: [
        'Business-to-Business (B2B)',
        'Business-to-Consumer (B2C)',
        'Consumer-to-Consumer (C2C)'
      ]
    },
    {
      title: 'SEO Services',
      description: 'Boost visibility and traffic with targeted, up-to-date SEO strategies.',
      icon: 'seo-services.png',
      fullDescription: `Edify Tech Solutions, a leading digital marketing agency in Bangalore, helps businesses achieve higher organic search rankings through a results-driven combination of on-page and off-page SEO strategies. Our expert team crafts high-quality, engaging content that strengthens your brand's authority in search results, while our strategic link-building approach secures premium backlinks from trusted, authoritative sources—boosting visibility, credibility, and long-term growth.`
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications that engage users and drive growth.',
      icon: 'mobile-app-development.png',
      fullDescription: `At Edify Tech Solutions, we specialize in building custom mobile applications that align precisely with your business goals. By understanding your vision and user needs, we design and develop high-performing mobile apps that strengthen brand presence and deliver real business value.`,
      details: [
        'Custom Mobile App Development - Build custom mobile applications that align with business goals and user needs.',
        'Cross-Platform & Native App Design - Develop native and cross-platform applications that deliver seamless functionality across iOS and Android devices.',
        'User-Centric UI/UX Design - Create visually engaging, user-friendly interfaces that enhance usability and increase retention.',
        'Secure Mobile App Development - Implement industry best practices to safeguard user data and ensure secure authentication.',
        'Performance Optimization & Scalability - Optimize app performance and design scalable architectures that evolve with business needs.',
        'Advanced Mobile App Functionality - Deliver feature-rich applications including e-commerce, API integrations, real-time notifications, and analytics.'
      ]
    }
  ];

  selectService(service: Service): void {
    this.selectedService = service;
  }

  closeDetail(): void {
    this.selectedService = null;
  }
}
