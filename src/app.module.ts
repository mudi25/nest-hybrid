import { Module } from '@nestjs/common';
import { RestController } from './rest.controller';
import { GrpcController } from './grpc.controller';

@Module({
  imports: [],
  controllers: [RestController, GrpcController],
})
export class AppModule {}
