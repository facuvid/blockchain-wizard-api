import { BlockchainProvider } from '@blockchain/blockchain';
import { ProviderFactory } from '@blockchain/blockchain/providers/provider.factory';
import { ProviderType } from '@blockchain/blockchain/providers/provider.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WizardService {
  private blockchainProvider: BlockchainProvider;

  constructor() {}

  public get(providerType: ProviderType): string {
    this.blockchainProvider = ProviderFactory.use(providerType);

    return this.blockchainProvider.get();
  }
}
