import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject } from 'class-validator';

export default class PublishMessageDto {
  @ApiProperty()
  @IsString()
  public exchange: string;

  @ApiProperty()
  @IsString()
  public routingKey: string;

  @ApiProperty()
  @IsObject()
  public msg: Record<string, any>;
}
