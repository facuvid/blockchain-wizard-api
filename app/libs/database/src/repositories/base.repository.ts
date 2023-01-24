import { Prisma, User } from '@prisma/client';

export interface IBaseRepository<
  T,
  TWhereUniqueArgs,
  TCountArgs,
  TUpdateData,
  TCreateArgs,
> {
  getOneOrNull(whereUniqueInput: TWhereUniqueArgs): Promise<T | null>;
  exists(countArgs: TCountArgs): Promise<boolean>;
  update(params: { where: TWhereUniqueArgs; data: TUpdateData }): Promise<T>;
  create(data: TCreateArgs): Promise<T>;
}
