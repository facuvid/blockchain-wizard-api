import { BlockchainModule } from '@blockchain/blockchain';
import { Module } from '@nestjs/common';
import { WizardController } from './controllers/wizard.controller';
import { WizardService } from './services/wizard.service';

@Module({
  imports: [BlockchainModule],
  controllers: [WizardController],
  providers: [WizardService],
})
export class WizardModule {}
