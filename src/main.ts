import { NestFactory } from '@nestjs/core';
import {
  HttpStatus,
  INestApplication,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const logger = new Logger('Main.ts');
const GLOBAL_PREFIX = process.env.GLOBAL_PREFIX || '/api';

function initializeSwagger(application: INestApplication) {
  const options = new DocumentBuilder()
    .setVersion('1')
    .setTitle('Autopragmat BACK-END API')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(application, options);

  SwaggerModule.setup(`${GLOBAL_PREFIX}/swagger`, application, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      credentials: true,
    },
    logger: ['log', 'error', 'verbose', 'debug'],
  });

  app.setGlobalPrefix(GLOBAL_PREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      whitelist: true,
      transform: true,
    }),
  );

  initializeSwagger(app);

  await app.listen(process.env.PORT || 8000, '0.0.0.0');
  const url = await app.getUrl();

  logger.log(
    `Application is running on: ${url}${GLOBAL_PREFIX}`,
    `Swagger is running on ${url}${GLOBAL_PREFIX}/swagger`,
  );
}

bootstrap();
