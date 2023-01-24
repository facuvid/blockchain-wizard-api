import { ProviderType } from '@blockchain/blockchain/providers/provider.type';
import { Controller, Get, Param } from '@nestjs/common';
import { WizardService } from '../services/wizard.service';

@Controller('wizard')
export class WizardController {
  constructor(private readonly wizardService: WizardService) {}

  @Get(':providerType')
  public get(@Param('providerType') providerType: ProviderType): string {
    return this.wizardService.get(providerType);
  }
}
