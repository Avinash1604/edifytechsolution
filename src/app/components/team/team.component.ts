import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Nag',
      role: 'Technology Leader',
      bio: `Nag is a technology visionary who believes in building digital systems that are purposeful, scalable, and resilient. With a strong grounding in modern software engineering, he views technology as a strategic driver—one that transforms complex problems into sustainable, future-ready solutions.

He brings hands-on experience across the design and delivery of digital platforms, combining technical depth with a pragmatic understanding of real-world challenges. His ability to adapt to evolving requirements and architect reliable, high-performing systems enables him to lead initiatives that balance innovation with long-term stability.

Rooted in strong analytical thinking and engineering discipline, Nagarjun approaches problem-solving with clarity and structure. He focuses on building clean, maintainable architectures that can evolve alongside changing business and technological landscapes.

As a leader, he values collaboration, accountability, and continuous learning. He is committed to empowering teams, aligning technology with vision, and creating digital solutions that deliver lasting impact and stand the test of time.`
    },
    {
      name: 'Avi',
      role: 'Technology Visionary',
      bio: `Avi is a technology visionary passionate about turning complex challenges into elegant, scalable digital solutions. With deep expertise in software design and development, he approaches technology not just as code, but as a strategic enabler of future-ready systems and experiences.

He has honed his craft across diverse technical environments, with hands-on experience in enterprise-grade technologies and solutions. His adaptability to evolving requirements and commitment to engineering excellence equip him to lead initiatives that balance innovation with reliability and long-term growth.

Avinasha's foundation in computer science and engineering—shaped by rigorous academic training—gives him a strong grounding in analytical thinking and problem decomposition. He applies this foundation to navigate complex technical landscapes, architecting solutions that are both robust and forward-looking.

As a leader, he emphasizes collaboration, clarity, and continuous learning, inspiring teams to push boundaries while maintaining disciplined execution. His vision is to leverage technology thoughtfully to create systems and experiences that empower users and stand resilient as industries evolve.`
    }
  ];
}
