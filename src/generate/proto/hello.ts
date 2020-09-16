/* eslint-disable */
import { Empty } from '../google/protobuf/empty';
import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface ResHello {
  message: string;
}

export interface ServiceClient {

  hello(request: Empty, metadata?: Metadata): Observable<ResHello>;

}

export interface ServiceController {

  hello(request: Empty, metadata?: Metadata): Promise<ResHello> | Observable<ResHello> | ResHello;

}

export function ServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['hello'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('Service', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('Service', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const HELLO_PACKAGE_NAME = 'hello'
export const SERVICE_NAME = 'Service';