import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AppService } from './app.service';

import PublishMessageDto from './dtos/publish-message.dto';

@Controller('rabbitmq')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ description: 'Publish message' })
  @Post()
  public publishMessage(@Body() dto: PublishMessageDto): Promise<void> {
    return this.appService.publishMessage(dto);
  }
}
