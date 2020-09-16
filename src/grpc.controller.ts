import { Controller } from '@nestjs/common';
import {
  ServiceControllerMethods,
  ServiceController,
  ResHello,
} from './generate/proto/hello';
import { Empty } from './generate/google/protobuf/empty';

@Controller()
@ServiceControllerMethods()
export class GrpcController implements ServiceController {
  async hello(
    request: Empty,
    metadata?: import('grpc').Metadata,
  ): Promise<ResHello> {
    return { message: 'GRPC' };
  }
}
