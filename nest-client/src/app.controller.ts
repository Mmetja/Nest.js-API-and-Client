import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('NEST_API')private readonly client: ClientProxy) {}

  async onApplicationBoostrap(){
    await this.client.connect();
  }

  @Get()
  getHello(): Observable<string> {
   return this.client.send<string>('entryPoint','test');
  }
}
