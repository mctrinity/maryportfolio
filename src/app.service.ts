import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo() {
    return {
      name: 'Mary Portfolio API',
      version: '1.0.0',
      description: 'A modern portfolio application built with Nest.js and Tailwind CSS',
      author: 'Mary',
      endpoints: {
        portfolio: '/api/portfolio',
        about: '/api/about', 
        projects: '/api/projects',
        contact: '/api/contact',
        skills: '/api/skills'
      },
      frontend: {
        home: '/',
        about: '/about.html',
        projects: '/projects.html',
        contact: '/contact.html'
      }
    };
  }
}