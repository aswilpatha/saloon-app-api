/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { TimeslotController } from './timeslot.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeslotSchema } from './entities/timeslot.schema';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Timeslot',schema:TimeslotSchema}])],
  controllers: [TimeslotController],
  providers: [TimeslotService]
})
export class TimeslotModule {}
