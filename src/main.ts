import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HELLO_PACKAGE_NAME } from './generate/proto/hello';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const grpcPort = process.env.GRPC_PORT || '8080';
  const restPort = process.env.REST_PORT || 8081;
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:' + grpcPort,
      package: HELLO_PACKAGE_NAME,
      protoPath: join(__dirname, '../proto/hello.proto'),
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listenAsync(restPort);
}
bootstrap();
