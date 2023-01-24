import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { IAuthNonce } from '../interfaces/authnonce.interface';

@Injectable()
export class NonceService {
  constructor(private readonly userService: UserService) {}

  public async generateNonce(address: string): Promise<IAuthNonce> {
    const nonce = Math.floor(Math.random() * 1000000).toString();

    await this.userService.update(address, {
      nonce,
    });

    return {
      nonce,
    };
  }
}
