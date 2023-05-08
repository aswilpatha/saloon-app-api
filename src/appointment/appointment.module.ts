/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentSchema } from './entities/appointment.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Appointment',schema:AppointmentSchema}])],
  controllers: [AppointmentController],
  providers: [AppointmentService]
})
export class AppointmentModule {}
