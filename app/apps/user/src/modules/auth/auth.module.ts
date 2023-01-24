import { DatabaseModule } from '@database/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { NonceService } from './services/nonce.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [NonceService, AuthService],
})
export class AuthModule {}
