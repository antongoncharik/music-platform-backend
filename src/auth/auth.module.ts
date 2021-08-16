import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.TOKEN_KEY ?? '5287601c-80b5-461b-aece-585c610a6d0d',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class AuthModule {}