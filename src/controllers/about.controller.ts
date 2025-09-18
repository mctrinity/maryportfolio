import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';

@Controller('about')
export class AboutController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getAboutInfo() {
    return this.portfolioService.getAboutInfo();
  }
}