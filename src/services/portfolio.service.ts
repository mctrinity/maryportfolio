import { Injectable } from '@nestjs/common';
import { Project, Skill, AboutInfo, ContactMessage } from '../interfaces/portfolio.interface';
import { CreateContactDto, ProjectFilterDto } from '../dtos/portfolio.dto';

@Injectable()
export class PortfolioService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      imageUrl: '/images/projects/ecommerce.jpg',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/mary/ecommerce-platform',
      featured: true,
      category: 'fullstack',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'SCSS'],
      imageUrl: '/images/projects/taskmanager.jpg',
      demoUrl: 'https://task-manager.example.com',
      githubUrl: 'https://github.com/mary/task-manager',
      featured: true,
      category: 'web',
      createdAt: new Date('2023-11-20'),
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and personalized weather alerts.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      imageUrl: '/images/projects/weather.jpg',
      demoUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/mary/weather-dashboard',
      featured: false,
      category: 'web',
      createdAt: new Date('2023-09-10'),
    },
    {
      id: '4',
      title: 'Mobile Fitness Tracker',
      description: 'A React Native mobile app for tracking workouts, nutrition, and fitness goals with offline capability.',
      technologies: ['React Native', 'Redux', 'SQLite', 'Expo'],
      imageUrl: '/images/projects/fitness.jpg',
      demoUrl: 'https://fitness-app.example.com',
      githubUrl: 'https://github.com/mary/fitness-tracker',
      featured: true,
      category: 'mobile',
      createdAt: new Date('2023-07-05'),
    },
  ];

  private skills: Skill[] = [
    { id: '1', name: 'JavaScript', category: 'frontend', proficiency: 'expert', icon: '⚡' },
    { id: '2', name: 'TypeScript', category: 'frontend', proficiency: 'advanced', icon: '🔷' },
    { id: '3', name: 'React', category: 'frontend', proficiency: 'expert', icon: '⚛️' },
    { id: '4', name: 'Vue.js', category: 'frontend', proficiency: 'advanced', icon: '💚' },
    { id: '5', name: 'Node.js', category: 'backend', proficiency: 'advanced', icon: '🟢' },
    { id: '6', name: 'NestJS', category: 'backend', proficiency: 'advanced', icon: '🐺' },
    { id: '7', name: 'PostgreSQL', category: 'backend', proficiency: 'intermediate', icon: '🐘' },
    { id: '8', name: 'MongoDB', category: 'backend', proficiency: 'intermediate', icon: '🍃' },
    { id: '9', name: 'Docker', category: 'tools', proficiency: 'intermediate', icon: '🐳' },
    { id: '10', name: 'Git', category: 'tools', proficiency: 'advanced', icon: '📝' },
    { id: '11', name: 'Figma', category: 'design', proficiency: 'intermediate', icon: '🎨' },
    { id: '12', name: 'Problem Solving', category: 'soft-skills', proficiency: 'expert', icon: '🧩' },
  ];

  private aboutInfo: AboutInfo = {
    name: 'Mary Johnson',
    title: 'Full-Stack Developer & UI/UX Enthusiast',
    bio: `Passionate full-stack developer with 3+ years of experience creating beautiful, functional web applications. 
          I love turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me 
          exploring new technologies, contributing to open source projects, or sketching UI concepts.`,
    location: 'San Francisco, CA',
    email: 'mary@example.com',
    social: {
      github: 'https://github.com/mary',
      linkedin: 'https://linkedin.com/in/maryjohnson',
      twitter: 'https://twitter.com/mary_codes',
      website: 'https://mary.dev',
    },
    profileImage: '/images/profile.jpg',
    resume: '/documents/mary-johnson-resume.pdf',
  };

  private contactMessages: ContactMessage[] = [];

  // Projects methods
  getAllProjects(filters?: ProjectFilterDto): Project[] {
    let filteredProjects = [...this.projects];

    if (filters?.category) {
      filteredProjects = filteredProjects.filter(p => p.category === filters.category);
    }

    if (filters?.featured !== undefined) {
      filteredProjects = filteredProjects.filter(p => p.featured === filters.featured);
    }

    if (filters?.technology) {
      filteredProjects = filteredProjects.filter(p => 
        p.technologies.some(tech => 
          tech.toLowerCase().includes(filters.technology.toLowerCase())
        )
      );
    }

    return filteredProjects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  // Skills methods
  getAllSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  // About methods
  getAboutInfo(): AboutInfo {
    return this.aboutInfo;
  }

  // Contact methods
  createContactMessage(contactDto: CreateContactDto): ContactMessage {
    const message: ContactMessage = {
      ...contactDto,
      timestamp: new Date(),
    };
    this.contactMessages.push(message);
    return message;
  }

  getAllContactMessages(): ContactMessage[] {
    return this.contactMessages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  // Portfolio overview
  getPortfolioOverview() {
    return {
      totalProjects: this.projects.length,
      featuredProjects: this.projects.filter(p => p.featured).length,
      skillsCount: this.skills.length,
      yearsExperience: 3,
      aboutInfo: this.aboutInfo,
      recentProjects: this.projects
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, 3),
    };
  }
}