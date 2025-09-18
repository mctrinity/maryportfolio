import { Module } from '@nestjs/common';
import { PortfolioController } from '../controllers/portfolio.controller';
import { AboutController } from '../controllers/about.controller';
import { ProjectsController } from '../controllers/projects.controller';
import { ContactController } from '../controllers/contact.controller';
import { SkillsController } from '../controllers/skills.controller';
import { PortfolioService } from '../services/portfolio.service';

@Module({
  controllers: [
    PortfolioController,
    AboutController,
    ProjectsController,
    ContactController,
    SkillsController,
  ],
  providers: [PortfolioService],
})
export class PortfolioModule {}