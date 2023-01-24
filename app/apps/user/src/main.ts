import { NestFactory } from '@nestjs/core';
import { AppUserModule } from './app-user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppUserModule);
  app.enableCors();
  await app.listen(4001);
}
bootstrap();
