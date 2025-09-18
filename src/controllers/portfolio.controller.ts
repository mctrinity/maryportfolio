import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolioOverview() {
    return this.portfolioService.getPortfolioOverview();
  }
}