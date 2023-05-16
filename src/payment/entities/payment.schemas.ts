/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Decimal128 } from 'mongoose';
import { Appointment } from 'src/appointment/entities/appointment.schemas';
import { User } from 'src/auth/schemas/auth.schemas';

@Schema({
    timestamps: true,
  })
export class Payment {
    @Prop()
    invoice_no: string;
    @Prop()
    total_amount :string;
    @Prop()
    payment_method: string;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'User' })
    user: User;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Appointment' })
    appointment: Appointment;


}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
