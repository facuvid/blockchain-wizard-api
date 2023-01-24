import { Module } from '@nestjs/common';
import { WizardModule } from './modules/wizard/wizard.module';

@Module({
  imports: [WizardModule],
  controllers: [],
  providers: [],
})
export class AppWizardModule {}
