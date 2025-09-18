# Mary Portfolio - Nest.js + Tailwind CSS

Mary Portfolio is a personal portfolio website built with Nest.js (Node.js backend framework) and Tailwind CSS (utility-first CSS framework). This repository contains the starting point for a modern, responsive portfolio application.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Prerequisites and Environment Setup
- Node.js 20.19.5+ and npm 10.8.2+ are required
- Git is required for version control
- The repository currently contains only README.md and LICENSE - the Nest.js application must be initialized

### Bootstrap and Initialize the Project
Since this is a starting repository, you must first create the Nest.js application:

1. **Install Nest CLI globally:**
   ```bash
   npm install -g @nestjs/cli
   ```
   - Takes ~21 seconds to complete
   - NEVER CANCEL: Set timeout to 60+ seconds

2. **Initialize Nest.js application (choose ONE approach):**

   **Option A: Initialize in repository root (recommended):**
   ```bash
   nest new . --package-manager npm --skip-git
   ```
   - Takes ~46 seconds to complete
   - NEVER CANCEL: Set timeout to 90+ seconds
   - This will add Nest.js files to the current directory

   **Option B: Create new project and merge:**
   ```bash
   nest new maryportfolio --package-manager npm --skip-git
   # Then move files to repository root
   ```

3. **Add Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/cli
   ```
   - Takes ~3-5 seconds to complete
   
4. **Initialize Tailwind (for v4+):**
   ```bash
   npx tailwindcss init -p
   ```
   - Creates tailwind.config.js and postcss.config.js

### Build and Development Commands

**Build the application:**
```bash
npm run build
```
- Takes ~3 seconds to complete
- NEVER CANCEL: Set timeout to 60+ seconds for larger projects
- Compiles TypeScript to JavaScript in the `dist/` directory

**Development server:**
```bash
npm run start:dev
```
- NEVER CANCEL: Runs continuously in watch mode
- Server starts on port 3000 by default
- Hot reload enabled - automatically rebuilds on file changes
- Takes ~2-3 seconds to start

**Production server:**
```bash
npm run start:prod
```
- Must run `npm run build` first
- Runs the compiled application from `dist/` directory

**Debug mode:**
```bash
npm run start:debug
```
- Runs with Node.js debugging enabled
- Connect debugger on default Node.js debug port

### Testing Commands

**Unit tests:**
```bash
npm test
```
- Takes ~4 seconds to complete
- NEVER CANCEL: Set timeout to 30+ seconds for larger test suites
- Uses Jest testing framework

**Unit tests with coverage:**
```bash
npm run test:cov
```
- Generates coverage report in `coverage/` directory
- Takes ~5-10 seconds to complete

**Watch mode for tests:**
```bash
npm run test:watch
```
- NEVER CANCEL: Runs continuously, watches for file changes

**End-to-end tests:**
```bash
npm run test:e2e
```
- Takes ~3-4 seconds to complete
- NEVER CANCEL: Set timeout to 60+ seconds for complex e2e suites
- NOTE: Default e2e tests may have TypeScript import issues that need fixing

### Code Quality and Formatting

**Linting:**
```bash
npm run lint
```
- Takes ~3 seconds to complete
- Uses ESLint with TypeScript support
- Automatically fixes fixable issues with --fix flag
- ALWAYS run before committing changes

**Code formatting:**
```bash
npm run format
```
- Takes <1 second to complete
- Uses Prettier for consistent code formatting
- ALWAYS run before committing changes

**CRITICAL: Always run both linting and formatting before committing:**
```bash
npm run format && npm run lint
```

## Validation Scenarios

After making changes to the codebase, ALWAYS validate with these scenarios:

### Basic Functionality Validation
1. **Build validation:**
   ```bash
   npm run build
   ```
   - Must complete without errors

2. **Test validation:**
   ```bash
   npm test
   ```
   - All tests must pass

3. **Development server validation:**
   ```bash
   npm run start:dev
   ```
   - Server must start without errors
   - Check logs for successful startup message

### Portfolio-Specific Validation
When working on portfolio features, test these scenarios:

1. **Homepage rendering:**
   - Start development server
   - Verify main portfolio page loads
   - Check responsive design on different screen sizes

2. **Navigation functionality:**
   - Test all navigation links
   - Verify smooth scrolling to sections
   - Check mobile menu functionality

3. **Content management:**
   - Test project showcase functionality
   - Verify contact form (if implemented)
   - Check about section displays correctly

4. **Performance:**
   - Verify fast loading times
   - Check CSS bundle size after Tailwind changes
   - Test image optimization

## Repository Structure

### Key Directories and Files
```
/
├── src/                    # Main application source code
│   ├── main.ts            # Application entry point
│   ├── app.module.ts      # Root application module
│   ├── app.controller.ts  # Root controller
│   ├── app.service.ts     # Root service
│   └── *.spec.ts          # Unit test files
├── test/                  # End-to-end test files
│   └── app.e2e-spec.ts   # Main e2e test
├── dist/                  # Compiled JavaScript output (after build)
├── coverage/              # Test coverage reports (after test:cov)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── nest-cli.json          # Nest CLI configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

### Important Configuration Files
- `package.json` - Contains all npm scripts and dependencies
- `tsconfig.json` - TypeScript compiler options
- `nest-cli.json` - Nest.js project configuration
- `tailwind.config.js` - Tailwind CSS customization
- `.eslintrc.js` / `eslint.config.mjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules

## Common Tasks and Troubleshooting

### Adding New Features
1. **Create a new module:**
   ```bash
   nest generate module [module-name]
   ```

2. **Create a new controller:**
   ```bash
   nest generate controller [controller-name]
   ```

3. **Create a new service:**
   ```bash
   nest generate service [service-name]
   ```

### Portfolio-Specific Development
- **Static assets:** Place in `src/assets/` or `public/` directory
- **Stylesheets:** Create component-specific CSS or use Tailwind classes
- **Images:** Optimize before adding, consider using Next.js Image component if migrating
- **Content:** Store portfolio data in JSON files or integrate with a CMS

### Common Issues
1. **E2E test import errors:** Known issue with supertest imports in recent Nest.js versions
2. **TypeScript warnings:** Address `@typescript-eslint/no-floating-promises` warnings
3. **Tailwind not working:** Ensure PostCSS configuration is correct
4. **Build errors:** Check TypeScript configuration and missing dependencies

### Performance Considerations
- **Bundle analysis:** Use webpack-bundle-analyzer for checking build size
- **CSS purging:** Tailwind automatically purges unused styles in production
- **Image optimization:** Use appropriate formats (WebP, AVIF) and compression
- **Lazy loading:** Implement for images and heavy components

## Development Workflow

### Before Starting Work
```bash
git pull
npm install  # If dependencies changed
npm run build  # Verify build works
npm test  # Verify tests pass
```

### During Development
```bash
npm run start:dev  # Start development server
# Make changes
npm run format  # Format code
npm run lint  # Check and fix linting issues
npm test  # Run tests after changes
```

### Before Committing
```bash
npm run format
npm run lint
npm test
npm run build  # Final build check
```

### Deployment Preparation
```bash
npm run build
npm run test:e2e  # If e2e tests are fixed
# Deploy dist/ directory
```

## Quick Reference

### Command Timing (Set appropriate timeouts)
- `npm install -g @nestjs/cli`: ~21 seconds (timeout: 60s)
- `nest new`: ~46 seconds (timeout: 90s)
- `npm run build`: ~3 seconds (timeout: 60s)
- `npm test`: ~4 seconds (timeout: 30s)
- `npm run lint`: ~3 seconds (timeout: 30s)
- `npm run format`: <1 second (timeout: 30s)

### Essential Commands Summary
```bash
# Setup (one-time)
npm install -g @nestjs/cli
nest new . --package-manager npm --skip-git
npm install -D tailwindcss postcss autoprefixer @tailwindcss/cli

# Development
npm run start:dev  # Development server
npm run build      # Build for production
npm test          # Run unit tests
npm run lint      # Check code quality
npm run format    # Format code

# NEVER CANCEL long-running commands - they may take 45+ minutes for large projects
```

Remember: This is a portfolio project, so always consider user experience, visual design, and performance when making changes. Test functionality thoroughly and ensure responsive design works across devices.