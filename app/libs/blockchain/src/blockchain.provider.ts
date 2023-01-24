export abstract class BlockchainProvider {
  protected abstract initialize(): Promise<void>;

  public abstract get(): string;
}
