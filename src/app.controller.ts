import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) // private authService: AuthService,
  {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    // return this.authService.login(req.user);
    return { msg: 'login' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('passportSession')
  getHello(): string {
    return this.appService.getHellome();
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('jwt')
  // getUserJwt(@Request() req): string {
  //   return req.user;
  // }
}
