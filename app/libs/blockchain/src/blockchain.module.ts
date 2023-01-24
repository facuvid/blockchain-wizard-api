import { Module } from '@nestjs/common';
import { ProviderFactory } from './providers/provider.factory';

@Module({
  providers: [ProviderFactory],
  exports: [ProviderFactory],
})
export class BlockchainModule {}
