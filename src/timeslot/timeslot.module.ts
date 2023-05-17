/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { TimeslotController } from './timeslot.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeslotSchema } from './entities/timeslot.schema';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { AppointmentService } from 'src/appointment/appointment.service';

@Module({
  imports:[AuthModule,
    AppointmentModule,
    MongooseModule.forFeature([{name:'Timeslot',schema:TimeslotSchema}])],
  controllers: [TimeslotController],
  providers: [TimeslotService, AppointmentService]
})
export class TimeslotModule {}
