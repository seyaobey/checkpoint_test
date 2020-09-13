import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as root from 'root-path';

import { AdminUIMiddleware } from './middlewares';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: root('admin'),
      exclude: ['/api*'], 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AdminUIMiddleware)
      .forRoutes({ path: "admin", method: RequestMethod.GET })
  }
}
