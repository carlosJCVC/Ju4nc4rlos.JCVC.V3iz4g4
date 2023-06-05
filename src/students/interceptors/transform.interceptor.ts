import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Response<T> {
//   statusCode: number;
//   message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> | Promise<Observable<Response<T>>> {
        var statusCode = context.switchToHttp().getResponse().statusCode;
        
        console.log('Before...');

        return next
          .handle()
          .pipe(
            map((data) => ({
              statusCode: statusCode,
              data
            })),
          );

     }

    // intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    //     return next
    //       .handle()
    //       .pipe(
    //         map((data) => ({
    //           statusCode: context.switchToHttp().getResponse().statusCode,
    //           message: data.message
    //           data: {
    //             result: data.result,
    //             meta: {} // if this is supposed to be the actual return then replace {} with data.result
    //           }
    //         })),
    //       );
    //   }
}