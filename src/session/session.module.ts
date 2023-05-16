/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSchema } from './entities/session.schema';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Session',schema:SessionSchema}])],
  controllers: [SessionController],
  providers: [SessionService]
})
export class SessionModule {}
