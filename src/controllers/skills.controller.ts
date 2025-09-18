import { Controller, Get, Query } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getAllSkills() {
    return this.portfolioService.getAllSkills();
  }

  @Get('category')
  getSkillsByCategory(@Query('name') category: string) {
    return this.portfolioService.getSkillsByCategory(category);
  }
}