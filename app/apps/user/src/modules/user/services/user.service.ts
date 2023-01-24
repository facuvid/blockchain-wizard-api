import { UserRepository } from '@database/database/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async exists(address: string): Promise<boolean> {
    return await this.userRepository.exists({
      where: {
        address: address.toLowerCase(),
      },
    });
  }

  public async getOneOrNull(address: string): Promise<User | null> {
    return await this.userRepository.getOneOrNull({
      address: address.toLowerCase(),
    });
  }

  public async update(
    address: string,
    data: Prisma.UserUpdateInput,
  ): Promise<void> {
    await this.userRepository.update({
      where: {
        address: address.toLowerCase(),
      },
      data,
    });
  }

  public async register(name: string, address: string): Promise<void> {
    await this.userRepository.create({
      data: {
        name,
        address: address.toLowerCase(),
        nonce: '', //TODO: set nullable
      },
    });
  }
}
