import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'firstName', passwordField: 'password' });
  }

  async validate(firstName: string, password: string): Promise<any> {
    const userdata = await this.authService.validateUser(firstName, password);
    if (!userdata) {
      throw new UnauthorizedException();
    }

    return userdata;
  }
}
