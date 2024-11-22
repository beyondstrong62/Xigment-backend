import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

// Load environment variables
dotenv.config();

// Create a logger instance
const logger = new Logger('Bootstrap');

async function bootstrap() {
  // Create the application
  const app = await NestFactory.create(AppModule);

  // Apply global validation pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // Apply the global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Start the server
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  // Log that the application has started
  logger.log(`Application is running on port ${port}`);
}

bootstrap();
