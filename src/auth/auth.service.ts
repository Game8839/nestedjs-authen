import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(firstName: string, password: string): Promise<any> {
    const user2 = await this.usersService.findOneToLogin(firstName);

    if (user2 && user2.password === password) {
      const { password, ...rest } = user2;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
