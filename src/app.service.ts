import { Injectable, Logger } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

import PublishMessageDto from './dtos/publish-message.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  public constructor(private readonly amqpConnection: AmqpConnection) {}

  public async publishMessage(data: PublishMessageDto): Promise<void> {
    this.logger.log('Incomming message data...', JSON.stringify(data));

    const { exchange, routingKey, msg } = data;

    try {
      await this.amqpConnection.publish(exchange, routingKey, msg);
    } catch (err) {
      this.logger.error('Some error on publishing message');
      this.logger.error(err);
    }
  }
}
