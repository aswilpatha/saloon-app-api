/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/auth.schemas';
import { Service } from 'src/services/entities/service.schemas';

@Schema({
    timestamps: true,
  })
export class Appointment {
    @Prop()
    appointment_date : Date;
    @Prop()
    appointment_time : Date;
    @Prop()
    location: string;
    @Prop()
    status:Status;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'User' })
    user: User;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Service' })
    service: Service;


}
export enum Status{
  UPCOMING='Upcoming',
  COMPLETED='Completed',
  CANCELLED='Cancelled',
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
