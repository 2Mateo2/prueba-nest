import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller( 'api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('despedida')
  getDespedida(): string {
    return this.appService.getDespedida();
  }  

}
