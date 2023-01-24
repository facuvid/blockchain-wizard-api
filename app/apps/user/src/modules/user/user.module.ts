import { DatabaseModule } from '@database/database';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
