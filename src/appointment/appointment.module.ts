/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentSchema } from './entities/appointment.schemas';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Appointment',schema:AppointmentSchema}])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService, MongooseModule]
})
export class AppointmentModule {}
