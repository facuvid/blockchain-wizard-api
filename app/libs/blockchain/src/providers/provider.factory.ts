import { Injectable } from '@nestjs/common';
import { BlockchainProvider } from '../blockchain.provider';
import { PolygonProvider } from './polygon/polygon.provider';
import { ProviderType } from './provider.type';

@Injectable()
export class ProviderFactory {
  public static use(type: ProviderType): BlockchainProvider | null {
    switch (type) {
      case ProviderType.Polygon:
        return new PolygonProvider();
      default:
        return null;
    }
  }
}
