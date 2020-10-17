import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.API_SERVER_PORT);
}
bootstrap();
