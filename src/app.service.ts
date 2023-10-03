import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDespedida(): string {
    return 'Adios gracias por utilizar el programa';
  }
}