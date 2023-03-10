import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AccessTokenGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, PostModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
