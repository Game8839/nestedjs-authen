import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use cookie and passport session
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET_KEY,
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 3600000 },
  //   }),
  // );
  // app.use(passport.initialize());
  // app.use(passport.session());

  app.enableCors();

  await app.listen(process.env.API_PORT || 5500);
  console.log('API running on port ' + process.env.API_PORT);
}
bootstrap();
