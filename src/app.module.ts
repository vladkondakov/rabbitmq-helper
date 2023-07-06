import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      connectionInitOptions: {
        timeout: 1500,
      },
      uri: process.env.URI_AMQP,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
