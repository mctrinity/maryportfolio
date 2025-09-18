// Portfolio Application JavaScript

class PortfolioApp {
  constructor() {
    this.apiBaseUrl = '/api';
    this.init();
  }

  async init() {
    this.setupNavigation();
    this.setupAnimations();
    await this.loadPortfolioData();
    this.setupContactForm();
    this.setupProjectFilters();
  }

  setupNavigation() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
  }

  async loadPortfolioData() {
    try {
      // Load portfolio overview
      const portfolioData = await this.fetchData('/portfolio');
      this.updatePortfolioStats(portfolioData);

      // Load projects
      const projects = await this.fetchData('/projects');
      this.renderProjects(projects);

      // Load skills
      const skills = await this.fetchData('/skills');
      this.renderSkills(skills);

      // Load about info
      const aboutInfo = await this.fetchData('/about');
      this.updateAboutSection(aboutInfo);

    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  }

  async fetchData(endpoint) {
    const response = await fetch(`${this.apiBaseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }
    return response.json();
  }

  updatePortfolioStats(data) {
    const statsElements = {
      totalProjects: document.getElementById('total-projects'),
      yearsExperience: document.getElementById('years-experience'),
      skillsCount: document.getElementById('skills-count')
    };

    if (statsElements.totalProjects) {
      this.animateCounter(statsElements.totalProjects, data.totalProjects);
    }
    if (statsElements.yearsExperience) {
      this.animateCounter(statsElements.yearsExperience, data.yearsExperience);
    }
    if (statsElements.skillsCount) {
      this.animateCounter(statsElements.skillsCount, data.skillsCount);
    }
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 30);
  }

  renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
      <div class="project-card fade-in-on-scroll" data-category="${project.category}">
        <div class="relative overflow-hidden">
          <img src="${project.imageUrl || '/images/placeholder-project.jpg'}" 
               alt="${project.title}" 
               class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-portfolio-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
            <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 class="text-xl font-bold mb-2">${project.title}</h4>
              <div class="flex space-x-4">
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn-secondary text-sm">Live Demo</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn-secondary text-sm">GitHub</a>` : ''}
              </div>
            </div>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">${project.title}</h3>
          <p class="text-gray-600 mb-4">${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(tech => `
              <span class="px-3 py-1 bg-portfolio-primary bg-opacity-10 text-portfolio-primary rounded-full text-sm">${tech}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  renderSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    container.innerHTML = Object.entries(skillsByCategory).map(([category, categorySkills]) => `
      <div class="mb-8 fade-in-on-scroll">
        <h3 class="text-xl font-bold mb-4 capitalize">${category.replace('-', ' ')}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${categorySkills.map(skill => `
            <div class="skill-card">
              <div class="text-2xl mb-2">${skill.icon || '⚡'}</div>
              <h4 class="font-medium">${skill.name}</h4>
              <div class="mt-2">
                <div class="bg-gray-200 rounded-full h-2">
                  <div class="bg-portfolio-primary rounded-full h-2 transition-all duration-1000" 
                       style="width: ${this.getProficiencyWidth(skill.proficiency)}%"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  getProficiencyWidth(proficiency) {
    switch (proficiency) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 95;
      default: return 50;
    }
  }

  updateAboutSection(aboutInfo) {
    const elements = {
      name: document.getElementById('about-name'),
      title: document.getElementById('about-title'),
      bio: document.getElementById('about-bio'),
      location: document.getElementById('about-location'),
      email: document.getElementById('about-email')
    };

    if (elements.name) elements.name.textContent = aboutInfo.name;
    if (elements.title) elements.title.textContent = aboutInfo.title;
    if (elements.bio) elements.bio.textContent = aboutInfo.bio;
    if (elements.location) elements.location.textContent = aboutInfo.location;
    if (elements.email) elements.email.textContent = aboutInfo.email;
  }

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch(`${this.apiBaseUrl}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (result.success) {
          this.showNotification('Message sent successfully!', 'success');
          form.reset();
        } else {
          this.showNotification('Failed to send message. Please try again.', 'error');
        }
      } catch (error) {
        this.showNotification('An error occurred. Please try again.', 'error');
      }
    });
  }

  setupProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
        filterButtons.forEach(btn => btn.classList.add('btn-secondary'));
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');

        // Filter projects
        projectCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});