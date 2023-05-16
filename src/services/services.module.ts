/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './entities/service.schemas';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Service',schema:ServiceSchema}])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
