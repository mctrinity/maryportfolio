import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Serve static files from public directory
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'public'));
  
  // Enable CORS for development
  app.enableCors();
  
  // Global API prefix
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Portfolio application is running on: http://localhost:${port}`);
  console.log(`📁 Static files served from: ${join(__dirname, '..', 'public')}`);
  console.log(`🌐 API endpoints available at: http://localhost:${port}/api`);
}

bootstrap();