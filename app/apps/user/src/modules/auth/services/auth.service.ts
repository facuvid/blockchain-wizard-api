import { MessageHelper } from '@blockchain/blockchain/helpers/message.helper';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/services/user.service';
import { UserExists } from '../errors/user-exists.error';
import { UserNotExists } from '../errors/user-not-exists.error';
import { IAuthNonce } from '../interfaces/authnonce.interface';
import { NonceService } from './nonce.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly nonceService: NonceService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  public async generateNonce(address: string): Promise<IAuthNonce> {
    const userExists = await this.userService.exists(address);

    if (userExists) {
      return await this.nonceService.generateNonce(address);
    } else {
      throw new UserNotExists();
    }
  }

  public async validateNonce(
    connectedAddress: string,
    signature: string,
  ): Promise<boolean> {
    let signaturePrefix = this.configService.get<string>('signature.prefix');

    const connectedUser = await this.userService.getOneOrNull(connectedAddress);

    if (connectedUser) {
      signaturePrefix += connectedUser.nonce;

      const addressIsValid = MessageHelper.signatureIsValid(
        connectedAddress,
        signaturePrefix,
        signature,
      );

      return addressIsValid;
    } else {
      throw new UserNotExists();
    }
  }

  public async register(name: string, address: string): Promise<void> {
    const userExists = await this.userService.exists(address);

    if (!userExists) {
      await this.userService.register(name, address);

      await this.generateNonce(address);
    } else {
      throw new UserExists();
    }
  }
}
