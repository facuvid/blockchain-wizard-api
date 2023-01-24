import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { IBaseRepository } from './base.repository';

@Injectable()
export class UserRepository
  implements
    IBaseRepository<
      User,
      Prisma.UserWhereUniqueInput,
      Prisma.UserCountArgs,
      Prisma.UserUpdateInput,
      Prisma.UserCreateArgs
    >
{
  constructor(private readonly prismaService: PrismaService) {}

  public async exists(countArgs: Prisma.UserCountArgs): Promise<boolean> {
    return (await this.prismaService.user.count(countArgs)) > 0;
  }

  public async getOneOrNull(
    whereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: whereUniqueInput,
    });
  }

  public async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;

    return this.prismaService.user.update({
      data,
      where,
    });
  }

  public async create(data: Prisma.UserCreateArgs): Promise<User> {
    return this.prismaService.user.create({ ...data });
  }
}
