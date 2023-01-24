import { BlockchainProvider } from '@blockchain/blockchain/blockchain.provider';
import { POSClient, use } from '@maticnetwork/maticjs';
import { Web3ClientPlugin } from '@maticnetwork/maticjs-web3';

export class PolygonProvider extends BlockchainProvider {
  private posClient: POSClient;
  constructor() {
    super();

    use(Web3ClientPlugin);
  }

  public get(): string {
    return 'polygon';
  }

  protected async initialize(): Promise<void> {
    this.posClient = new POSClient();
  }
}
