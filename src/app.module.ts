import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'; 
import { ServeStaticModule } from '@nestjs/serve-static';
import * as root from 'root-path';

import { AdminUIMiddleware } from './middlewares';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      introspection: true,
      playground: true,
      path: '/api/graphql',
    }),
    ServeStaticModule.forRoot({
      rootPath: root('admin'),
      exclude: ['/api*'], 
    }),
    PrismaModule,
    UsersModule,
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
