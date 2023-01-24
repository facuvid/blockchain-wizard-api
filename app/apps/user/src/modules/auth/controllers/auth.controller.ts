import { MessageHelper } from '@blockchain/blockchain/helpers/message.helper';
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import configuration from 'apps/user/src/config/configuration';
import { AuthService } from '../services/auth.service';
import { NonceViewModel } from '../viewmodels/nonce.viewmodel';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(':connectedAddress/register')
  public async register(
    @Param('connectedAddress') connectedAddress: string,
    @Body() bodyParams: { name: string },
  ): Promise<boolean> {
    try {
      await this.authService.register(bodyParams.name, connectedAddress);
      return true;
    } catch (e) {
      console.error(e);

      return false;
    }
  }

  @Post(':connectedAddress/nonce/generate')
  public async generateNonce(
    @Param('connectedAddress') connectedAddress: string,
  ): Promise<NonceViewModel> {
    try {
      const generatedNonce = await this.authService.generateNonce(
        connectedAddress,
      );

      return {
        nonce: generatedNonce.nonce,
      };
    } catch (e) {
      console.error(e);
    }
  }

  @Post(':connectedAddress/nonce/validate')
  public async validateGeneratedNonce(
    @Param('connectedAddress') connectedAddress: string,
    @Body() bodyParam: { signature: string },
  ): Promise<boolean> {
    try {
      const signatureIsValid = await this.authService.validateNonce(
        connectedAddress,
        bodyParam.signature,
      );

      return signatureIsValid;
    } catch (e) {
      console.error(e);

      return false;
    }
  }
}
