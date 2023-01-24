import { NestFactory } from '@nestjs/core';
import { AppWizardModule } from './app-wizard.module';

async function bootstrap() {
  const app = await NestFactory.create(AppWizardModule);
  await app.listen(4000);
}
bootstrap();
