# Mary Portfolio

A modern, responsive portfolio website built with **Nest.js** and **Tailwind CSS**, showcasing full-stack development skills with a beautiful, creative design.

![Portfolio Screenshot](https://github.com/user-attachments/assets/30a7dc46-00b2-4bcf-8959-2791ca0f0a6e)

## 🚀 Features

### Backend (Nest.js)
- **RESTful API** with organized controllers and services
- **TypeScript** for type safety and better developer experience
- **Modular architecture** with separate modules for different functionalities
- **Data persistence** with in-memory storage (easily extendable to databases)
- **CORS enabled** for development and cross-origin requests
- **Static file serving** for frontend assets

### Frontend (Tailwind CSS)
- **Responsive design** that works on all devices
- **Modern gradient themes** with custom color palette
- **Interactive animations** and smooth transitions
- **Dynamic content loading** from API endpoints
- **Contact form** with real-time validation and API integration
- **Project filtering** and categorization
- **Skills showcase** with progress indicators

### Key Sections
- **Hero Section**: Eye-catching gradient background with call-to-action
- **About Section**: Personal information with animated counters
- **Projects Section**: Filterable project cards with hover effects
- **Skills Section**: Categorized skills with proficiency levels
- **Contact Section**: Functional contact form with API integration

## 🛠️ Tech Stack

- **Backend**: Nest.js, TypeScript, Express.js
- **Frontend**: HTML5, CSS3, Tailwind CSS, Vanilla JavaScript
- **Styling**: Custom Tailwind configuration with portfolio-specific themes
- **API**: RESTful endpoints for portfolio data
- **Build Tools**: npm, TypeScript compiler, Nest CLI

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/mctrinity/maryportfolio.git
   cd maryportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

4. **Start the development server**
   ```bash
   npm run start:dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run start:dev` - Start development server with hot reload
- `npm run start:prod` - Start production server
- `npm run build` - Build the application
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
maryportfolio/
├── src/                          # Backend source code
│   ├── controllers/              # API route handlers
│   │   ├── about.controller.ts
│   │   ├── contact.controller.ts
│   │   ├── portfolio.controller.ts
│   │   ├── projects.controller.ts
│   │   └── skills.controller.ts
│   ├── services/                 # Business logic
│   │   └── portfolio.service.ts
│   ├── modules/                  # Feature modules
│   │   └── portfolio.module.ts
│   ├── dtos/                     # Data Transfer Objects
│   │   └── portfolio.dto.ts
│   ├── interfaces/               # TypeScript interfaces
│   │   └── portfolio.interface.ts
│   ├── app.module.ts            # Main application module
│   ├── app.controller.ts        # Main controller
│   ├── app.service.ts           # Main service
│   └── main.ts                  # Application entry point
├── public/                       # Frontend static files
│   ├── css/                     # Stylesheets
│   │   └── style.css
│   ├── js/                      # JavaScript files
│   │   └── app.js
│   ├── images/                  # Image assets
│   ├── documents/               # Document files
│   └── index.html               # Main HTML file
├── dist/                        # Compiled output
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## 🔌 API Endpoints

### Portfolio Information
- `GET /api` - Application information and available endpoints
- `GET /api/portfolio` - Portfolio overview with statistics

### About & Personal Info
- `GET /api/about` - Personal information and bio

### Projects
- `GET /api/projects` - All projects with optional filtering
- `GET /api/projects/featured` - Featured projects only
- `GET /api/projects/:id` - Specific project details

### Skills
- `GET /api/skills` - All skills and technologies
- `GET /api/skills/category?name=frontend` - Skills by category

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Retrieve all messages (admin)

### Health Check
- `GET /api/health` - Application health status

## 🎨 Customization

### Updating Portfolio Content

1. **Personal Information**: Edit `src/services/portfolio.service.ts`
2. **Projects**: Add/modify projects in the `projects` array
3. **Skills**: Update the `skills` array with your technologies
4. **About Info**: Change the `aboutInfo` object
5. **Styling**: Modify `tailwind.config.js` for custom colors and themes

### Adding New Features

1. **New API Endpoints**: Create controllers in `src/controllers/`
2. **Business Logic**: Add services in `src/services/`
3. **Frontend Components**: Update `public/js/app.js`
4. **Styling**: Add custom CSS in `public/css/style.css`

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start:prod
```

### Environment Variables
Create a `.env` file for production settings:
```
PORT=3000
NODE_ENV=production
```

### Deploy to Cloud Platforms
- **Heroku**: Use the provided `package.json` scripts
- **Vercel**: Configure build settings for Nest.js
- **DigitalOcean**: Use PM2 for process management
- **AWS**: Deploy using Elastic Beanstalk or EC2

## 🧪 Testing

Run the test suite:
```bash
npm run test
npm run test:watch    # Watch mode
npm run test:cov      # Coverage report
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Creative Features

This portfolio includes several creative and modern touches:

- **Gradient Animations**: Floating elements with CSS animations
- **Interactive Project Cards**: Hover effects revealing project details
- **Dynamic Counters**: Animated statistics in the about section
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Modern Color Palette**: Custom portfolio-themed color scheme
- **Progress Indicators**: Visual skill proficiency representations

## 🔧 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication and admin panel
- Blog/article section
- Theme switching (dark/light mode)
- Internationalization (i18n)
- SEO optimization
- Performance monitoring
- Email notifications for contact form

## 📞 Support

For questions or support, please contact:
- Email: mary@example.com
- GitHub: [@mary](https://github.com/mary)
- LinkedIn: [Mary Johnson](https://linkedin.com/in/maryjohnson)

---

**Built with ❤️ using Nest.js and Tailwind CSS**
