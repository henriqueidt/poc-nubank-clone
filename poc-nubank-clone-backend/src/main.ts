import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// This is the function that initializes the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
