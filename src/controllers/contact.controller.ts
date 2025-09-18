import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { CreateContactDto } from '../dtos/portfolio.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  createContactMessage(@Body() createContactDto: CreateContactDto) {
    const message = this.portfolioService.createContactMessage(createContactDto);
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: message,
    };
  }

  @Get('messages')
  getAllContactMessages() {
    return this.portfolioService.getAllContactMessages();
  }
}