import { Controller, Get, Query, Param } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { ProjectFilterDto } from '../dtos/portfolio.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getAllProjects(@Query() filters: ProjectFilterDto) {
    return this.portfolioService.getAllProjects(filters);
  }

  @Get('featured')
  getFeaturedProjects() {
    return this.portfolioService.getFeaturedProjects();
  }

  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.portfolioService.getProjectById(id);
  }
}