import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

const logger = new Logger('AppController')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('entryPoint')
  getHello(data:string): Observable <string> {
   console.log("hit msrv successfully")
    return from("hit msrv successfully");
  }
}
