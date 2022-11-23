import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHellome(): string {
    return 'Hello World! pappii';
  }
}
